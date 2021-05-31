package com.example.utils;

import cn.hutool.db.nosql.redis.RedisDS;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import redis.clients.jedis.Jedis;

/**
 * @name: RedisUtil
 * @description: 基于hutool的redis工具类
 * @author: xw.s
 * @date: 2021/5/31-9:19
 */
@Slf4j
public class RedisUtil {

    private static Jedis jedis;

    static{
        jedis = RedisDS.create().getJedis();
    }

    /**
     * set
     * @param key
     * @param val
     * @return
     */
    public static boolean set(String key, String val){
        try{
            jedis.set(key, val);
            return true;
        }catch (Exception e){
            log.error("redis set发生异常：");
            e.printStackTrace();
        }
        return false;
    }


    /**
     * get
     * @param key
     * @return
     */
    public static String get(String key){
        try{
            return jedis.get(key);
        }catch (Exception e){
            log.error("redis get发生异常：");
            e.printStackTrace();
        }
        return null;
    }
}
