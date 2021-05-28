package com.example.common.result;

public enum ResuleCodeEnum {
    SUEECSS(1),
    FAILURE(0);

    int code;
    ResuleCodeEnum(int code){
        this.code=code;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }
}
