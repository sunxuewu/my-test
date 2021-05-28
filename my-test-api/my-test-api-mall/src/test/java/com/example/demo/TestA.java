package com.example.demo;

import cn.hutool.json.JSONObject;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.domain.Member;
import com.example.mapper.MemberMapper;
import com.example.service.IMemberService;
import com.example.service.IUserService;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

@RunWith(SpringRunner.class)
@SpringBootTest
@Slf4j
public class TestA {

	@Autowired
	private IUserService userService;

	@Autowired
	private IMemberService memberService;

//	@Autowired
//	private MemberMapper memberMapper;

	@Test
	public void contextLoads() {
		System.out.println("==================================================");
		System.out.println("==================================================");
		System.out.println("==================================================");

		Scanner myScanner = new Scanner(System.in);
		System.out.println("请输入一个数字");
//		int sc = myScanner.nextInt();
//		System.out.println(sc);

		System.out.println("==================================================");
		System.out.println("==================================================");
		System.out.println("==================================================");
	}

}

