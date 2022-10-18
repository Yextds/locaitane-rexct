import * as React from "react";
import "../index.css";
import { GetPath, Template, TemplateProps, TemplateRenderProps } from "@yext/pages";
import { SearchHeadlessProvider, useSearchActions } from "@yext/search-headless-react";
import PageLayout from "../components/layouts/PageLayout";
import SearchLayout from "../components/locatorPage/SearchLayout";
import {  AnswerExperienceConfig  } from "../config/globalConfig";

export const getPath: GetPath<TemplateProps> = () => {
  return `/locatorSearch`;
};

const locatorSearch: Template<TemplateRenderProps> = () => {

const providerOptions: google.maps.MapOptions = {
  disableDefaultUI: true
}

return (
    <>
   
        <SearchHeadlessProvider
            experienceKey={AnswerExperienceConfig.experienceKey}
            locale={AnswerExperienceConfig.locale}
            apiKey={AnswerExperienceConfig.apiKey}               
            verticalKey={AnswerExperienceConfig.verticalKey}
            experienceVersion={AnswerExperienceConfig.experienceVersion}
            sessionTrackingEnabled={AnswerExperienceConfig.sessionTrackingEnabled}  
            endpoints={AnswerExperienceConfig.endpoints}         
        >
           <SearchLayout/>           
        </SearchHeadlessProvider>   
 
    </>
  );
};

export default locatorSearch;