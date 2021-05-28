package com.example.demo;

import com.example.utils.RedisUtils;
import lombok.extern.slf4j.Slf4j;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
@Slf4j
public class RedisTest {

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
     * 测试redis
	 */
	@Test
	public void test() {
		RedisUtils.get("aaa");
	}

}
