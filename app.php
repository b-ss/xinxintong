<?php

include_once dirname(__FILE__) . '/config.php';

/**
 * error handle
 * database resource.
 */
ini_set('display_errors', 'On');
//ini_set('display_errors', 'Off');
error_reporting(APP_REEOR_REPORTING_LEVEL === 'ERROR' ? E_ERROR : (APP_REEOR_REPORTING_LEVEL === '0' ? 0 : E_ALL));

if (isset($_COOKIE['PHPSESSID']) && !preg_match('/^[a-zA-Z0-9,-]{1,128}$/', $_COOKIE['PHPSESSID'])) die('SESSID错误');
session_start();

/***************************
 * error and exception handle
 ***************************/
/**
 * file
 * line
 * function
 * args
 * type
 * class
 */
function show_error($message)
{
  require_once 'tms/tms_app.php';
  $modelLog = TMS_APP::M('log');
  if ($message instanceof UrlNotMatchException || $message instanceof SiteUserException) {
    $msg = $message->getMessage();
  } else if ($message instanceof Exception) {
    $excep = $message->getMessage();
    $trace = $message->getTrace();
    foreach ($trace as $t) {
      $excep .= '<br>';
      foreach ($t as $k => $v) {
        if (!in_array($k, ['file', 'line'])) {
          continue;
        }
        $excep .= $modelLog->toJson($v) . ' ';
      }
    }
    if (defined('TMS_APP_EXCEPTION_TRACE') && TMS_APP_EXCEPTION_TRACE === 'Y') {
      $msg = $excep;
    } else {
      $msg = '应用程序内部错误';
    }
  } else if (is_string($message)) {
    $msg = $message;
  } else {
    if (defined('TMS_APP_EXCEPTION_TRACE') && TMS_APP_EXCEPTION_TRACE === 'Y') {
      $msg = json_encode($message);
    } else {
      $msg = '应用程序内部错误';
    }
  }
  /* 返回信息 */
  header("HTTP/1.1 500 Internal Server Error");
  header('Content-Type: text/plain; charset=utf-8');
  echo $msg;

  /* 记录日志 */
  $method = isset($_SERVER['REQUEST_URI']) ? tms_get_server('REQUEST_URI') : 'unknown request';
  if (isset($excep)) {
    $msg = str_replace('<br>', "\n", $excep);
  }

  $msg = $modelLog->escape($msg);

  /* 记录24小时内的报错信息 */
  $logfilename = 'logs/error.log';
  if (file_exists($logfilename)) {
    $mtime = filemtime($logfilename);
    if ($mtime < time() - 86400) {
      $logfile = fopen($logfilename, 'wb');
    } else {
      $logfile = fopen($logfilename, 'ab');
    }
  } else {
    $logfile = fopen($logfilename, 'wb');
  }
  fwrite($logfile, date('Ymd H:i') . ' - ' . $msg . PHP_EOL);
  fclose($logfile);

  /* 错误信息报错的到数据库 */
  if ($message instanceof SiteUserException) {
    $modelLog->log($message->getUserid(), $method, $msg, '', '', $message->getDebugInfo());
  } else {
    $modelLog->log('error', $method, $msg);
  }

  exit;
}

function tms_error_handler($errno, $errstr, $errfile, $errline, $errcontext)
{
  switch ($errno) {
    case E_ERROR:
      show_error(new ErrorException('ERROR:' . $errstr, 0, $errno, $errfile, $errline));
    case E_WARNING:
      show_error(new ErrorException('E_WARNING:' . $errstr, 0, $errno, $errfile, $errline));
    case E_PARSE:
      show_error(new ErrorException('E_PARSE:' . $errstr, 0, $errno, $errfile, $errline));
    case E_NOTICE:
      show_error(new ErrorException('E_NOTICE:' . $errstr, 0, $errno, $errfile, $errline));
    case E_CORE_ERROR:
      show_error(new ErrorException('E_CORE_ERROR:' . $errstr, 0, $errno, $errfile, $errline));
    case E_CORE_WARNING:
      show_error(new ErrorException('E_CORE_WARNING:' . $errstr, 0, $errno, $errfile, $errline));
    case E_COMPILE_ERROR:
      show_error(new ErrorException('E_COMPILE_ERROR:' . $errstr, 0, $errno, $errfile, $errline));
    case E_COMPILE_WARNING:
      show_error(new ErrorException('E_COMPILE_WARNING:' . $errstr, 0, $errno, $errfile, $errline));
    case E_USER_ERROR:
      show_error(new ErrorException('E_USER_ERROR:' . $errstr, 0, $errno, $errfile, $errline));
    case E_USER_WARNING:
      show_error(new ErrorException('E_USER_WARNING:' . $errstr, 0, $errno, $errfile, $errline));
    case E_USER_NOTICE:
      show_error(new ErrorException('E_USER_NOTICE:' . $errstr, 0, $errno, $errfile, $errline));
    case E_STRICT:
      show_error(new ErrorException('E_STRICT:' . $errstr, 0, $errno, $errfile, $errline));
    case E_RECOVERABLE_ERROR:
      show_error(new ErrorException('E_RECOVERABLE_ERROR:' . $errstr, 0, $errno, $errfile, $errline));
    case E_DEPRECATED:
      show_error(new ErrorException('E_DEPRECATED:' . $errstr, 0, $errno, $errfile, $errline));
    case E_USER_DEPRECATED:
      show_error(new ErrorException('E_USER_DEPRECATED:' . $errstr, 0, $errno, $errfile, $errline));
  }
}
set_error_handler('tms_error_handler');

function tms_exception_handler($exception)
{
  show_error($exception);
}
set_exception_handler('tms_exception_handler');
/**
 *  Given a file, i.e. /css/base.css, replaces it with a string containing the
 *  file's mtime, i.e. /css/base.1221534296.css.
 *
 *  @param $file  The file to be loaded.  Must be an absolute path (i.e.
 *                starting with slash).
 */
function auto_version($file)
{
  if (strpos($file, DIRECTORY_SEPARATOR) !== 0 || !file_exists(TMS_APP_DIR . $file)) {
    return $file;
  }
  $mtime = filemtime(TMS_APP_DIR . $file);
  $file .= '?_=' . $mtime;
  return $file;
}
/**
 * 获得文件的定制版本
 */
function custom_version($file)
{
  if (0 !== strpos($file, DIRECTORY_SEPARATOR)) {
    $file = DIRECTORY_SEPARATOR . $file;
  }

  $full = '/views/' . TMS_APP_VIEW_NAME . $file;
  if (!file_exists(TMS_APP_DIR . $full)) {
    $full = '/views/' . TMS_APP_VIEW_NAME_DEFAULT . $file;
  }

  $full = auto_version($full);

  $full = TMS_APP_URI . $full;

  return $full;
}
/**
 * 设置默认数学计算精度
 */
if (defined('APP_TMS_BCSCALE')) {
  bcscale(APP_TMS_BCSCALE);
}

/*************************
 * run application.
 *************************/
require_once 'tms/tms_app.php';

$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

header('Access-Control-Allow-Origin:' . $origin);
header('Access-Control-Allow-Credentials:true');

$config = array();
TMS_APP::run($config);
