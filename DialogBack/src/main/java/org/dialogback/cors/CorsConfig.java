package org.dialogback.cors;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//@Configuration
//@EnableWebMvc
//public class CorsConfig implements WebMvcConfigurer {
//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
//        registry.addMapping("/**")
//                .allowedOriginPatterns("http://localhost:4200") // Replace with your Angular app domain
//                .allowedMethods("GET", "POST", "PUT", "DELETE")
////                .allowedOriginPatterns("http://localhost:4200")
//                .allowedHeaders("*")
//                .allowCredentials(true);
//    }
//}