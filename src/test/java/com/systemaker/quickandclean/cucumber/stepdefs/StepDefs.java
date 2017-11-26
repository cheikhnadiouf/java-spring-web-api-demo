package com.systemaker.quickandclean.cucumber.stepdefs;

import com.systemaker.quickandclean.QuickandcleanApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = QuickandcleanApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
