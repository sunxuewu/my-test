package com.example.controller;

import com.example.common.Result;
import com.example.domain.User;
import com.example.logic.ITestLogis;
import com.example.vo.test.index.UserVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
@CrossOrigin
public class TestController {

    @Autowired
    private ITestLogis testLogis;

    @RequestMapping("/index")
    public Result<UserVo> index(){
        UserVo user = testLogis.test();
        System.out.println(user);
        return Result.success(user);
    }
}
