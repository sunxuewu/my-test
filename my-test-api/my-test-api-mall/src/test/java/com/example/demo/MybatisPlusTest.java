package com.example.demo;

import cn.hutool.json.JSONUtil;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.domain.Member;
import com.example.mapper.MemberMapper;
import com.example.service.IMemberService;
import lombok.extern.slf4j.Slf4j;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
@Slf4j
public class MybatisPlusTest {

	@Autowired
	private IMemberService memberService;

	@Before
	public void before(){
		System.out.println("========================Starting......==========================");
		System.out.println("========================Starting......==========================");
		System.out.println("========================Starting......==========================");
	}

	@After
	public void after(){
		System.out.println("========================End......===============================");
		System.out.println("========================End......===============================");
		System.out.println("========================End......===============================");
	}

	/**
	 * 测试mybatis-plus分页
	 */
	@Test
	public void pageTest() {
		Page<Member> page = new Page(2,3);
		IPage<Member> iPage = memberService.page(page);
		System.out.println(iPage.getRecords());
	}

	/**
	 * 测试自己写的sql
	 */
	@Test
	public void testXmlSql(){
		List<Member> memberList = memberService.selectMemberByName("b");
		System.out.println(JSONUtil.parseObj(memberList));
		System.out.println(memberList);
	}

}

