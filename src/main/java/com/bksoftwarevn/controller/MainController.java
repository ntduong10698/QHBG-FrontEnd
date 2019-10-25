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

    @RequestMapping(value = {"/gia-dat-nong-nghiep"}, method = RequestMethod.GET)
    public String landPrice(Model model) {
        return "landPrice";
    }

    @RequestMapping(value = {"/gia-dat-phi-nong-nghiep"}, method = RequestMethod.GET)
    public String landPricePNN(Model model) {
        return "landPricePNN";
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

    @RequestMapping(value = {"/thong-tin-quyet-dinh"}, method = RequestMethod.GET)
    public String infoDecision(Model model) {
        return "infoDecision";
    }

    @RequestMapping(value = {"/huong-dan"}, method = RequestMethod.GET)
    public String guide(Model model) {
        return "guide";
    }

    @RequestMapping(value = {"/gop-y"}, method = RequestMethod.GET)
    public String feedBack(Model model) {
        return "feedBack";
    }

    @RequestMapping(value = {"/xac-thuc"}, method = RequestMethod.GET)
    public String active(Model model) {
        return "active";
    }

    @RequestMapping(value = {"/ban-do-gia-dat"}, method = RequestMethod.GET)
    public String mapLandPrice(Model model) {
        return "mapLandPrice";
    }
}
