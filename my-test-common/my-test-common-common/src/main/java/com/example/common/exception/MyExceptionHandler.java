package com.example.common.exception;

import com.example.common.Result;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
@ResponseBody
@Slf4j
public class MyExceptionHandler {

    /**
     * 处理自定义异常
     */
    @ExceptionHandler(LinkerException.class)
    public Result handleRRException(LinkerException e){
        log.error(e.getMessage(), e);
        return Result.failure(e.getMessage());
    }

    /**
     * 通用异常处理
     */
    @ExceptionHandler(Exception.class)
    public Result handleException(Exception e){
        log.error(e.getMessage(), e);
        return Result.failure("操作失败，"+e.getMessage());
    }

}
