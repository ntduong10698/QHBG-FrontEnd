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

    @RequestMapping(value = {"/gia-dat"}, method = RequestMethod.GET)
    public String landPrice(Model model) {
        return "landPrice";
    }

    @RequestMapping(value = {"/du-an"}, method = RequestMethod.GET)
    public String Project(Model model) {
        return "project";
    }

    @RequestMapping(value = {"/quyet-dinh"}, method = RequestMethod.GET)
    public String Decision(Model model) {
        return "decision";
    }

    @RequestMapping(value = {"/quy-hoach", "/ke-hoach"}, method = RequestMethod.GET)
    public String Map(Model model) {
        return "map";
    }

}
