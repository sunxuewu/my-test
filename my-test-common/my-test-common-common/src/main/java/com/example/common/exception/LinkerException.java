package com.example.common.exception;

public class LinkerException extends RuntimeException {
    private static final long serialVersionUID = 1L;

    public LinkerException(String message){
        super(message);
    }

    public LinkerException(Throwable cause)
    {
        super(cause);
    }

    public LinkerException(String message,Throwable cause)
    {
        super(message,cause);
    }
}
