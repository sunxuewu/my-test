package com.example.common;

import com.example.common.result.ResuleCodeEnum;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Result<T> implements Serializable {
    private int code;
    private String message;
    private T data;

    //返回成功
    public static<T> Result<T> success(){
        Result<T> result = new Result();
        result.setCode(ResuleCodeEnum.SUEECSS.getCode());
        result.setMessage("处理成功");
        return result;
    }

    //返回成功
    public static<T> Result<T> success(String message){
        Result<T> result = new Result();
        result.setCode(ResuleCodeEnum.SUEECSS.getCode());
        result.setMessage(message);
        return result;
    }

    //返回成功
    public static<T> Result<T> success(T data){
        Result<T> result = new Result();
        result.setCode(ResuleCodeEnum.SUEECSS.getCode());
        result.setData(data);
        result.setMessage("处理成功");
        return result;
    }

    //返回成功
    public static<T> Result<T> success(String message, T data){
        Result<T> result = new Result();
        result.setMessage(message);
        result.setData(data);
        result.setCode(ResuleCodeEnum.SUEECSS.getCode());
        return result;
    }

    //返回失败
    public static<T> Result<T> failure(){
        Result<T> result = new Result();
        result.setCode(ResuleCodeEnum.FAILURE.getCode());
        result.setMessage("处理失败");
        return result;
    }

    //返回失败
    public static<T> Result<T> failure(String message){
        Result<T> result = new Result();
        result.setCode(ResuleCodeEnum.FAILURE.getCode());
        result.setMessage(message);
        return result;
    }

    //返回失败
    public static<T> Result<T> failure(T data){
        Result<T> result = new Result();
        result.setCode(ResuleCodeEnum.FAILURE.getCode());
        result.setData(data);
        return result;
    }

    //返回失败
    public static<T> Result<T> failure(String message, T data){
        Result<T> result = new Result();
        result.setCode(ResuleCodeEnum.FAILURE.getCode());
        result.setMessage(message);
        result.setData(data);
        return result;
    }

}
