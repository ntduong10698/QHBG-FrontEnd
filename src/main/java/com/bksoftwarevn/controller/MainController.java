package com.bksoftwarevn.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class MainController {

    @RequestMapping(value = {"/", "/home"}, method = RequestMethod.GET)
    public String home(Model model) {
        return "home";
    }

    @RequestMapping(value = {"/gia-dat-nong-nghiep", "/gia-dat-phi-nong-nghiep"}, method = RequestMethod.GET)
    public String landPrice(Model model) {
        return "landPrice";
    }

    @RequestMapping(value = {"/du-an"}, method = RequestMethod.GET)
    public String project(Model model) {
        return "project";
    }

    @RequestMapping(value = {"/quyet-dinh"}, method = RequestMethod.GET)
    public String decision(Model model) {
        return "decision";
    }

    @RequestMapping(value = {"/quy-hoach", "/ke-hoach"}, method = RequestMethod.GET)
    public String map(Model model) {
        return "map";
    }

    @RequestMapping(value = {"/tra-cuu-quy-hoach", "/tra-cuu-ke-hoach"}, method = RequestMethod.GET)
    public String findQhKhUse(Model model) {
        return "findQhKhUse";
    }

    @RequestMapping(value = {"/tra-cuu-dieu-chinh-quy-hoach"}, method = RequestMethod.GET)
    public String findDcQh(Model model) {
        return "findDcQh";
    }

    @RequestMapping(value = {"/he-so-dieu-chinh"}, method = RequestMethod.GET)
    public String hsDc(Model model) {
        return "hsDc";
    }
}
