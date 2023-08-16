import gcp from "../assets/svg/static/gcp.svg";
import html from "../assets/svg/static/html.svg";
import photoshop from "../assets/svg/static/photoshop.svg";
import illustrator from "../assets/svg/static/illustrator.svg";
import docker from "../assets/svg/static/docker.svg";
import adobeXd from "../assets/svg/static/adobe-xd.svg";
import afterEffects from "../assets/svg/static/after-effects.svg";
import css from "../assets/svg/static/css.svg";
import angular from "../assets/svg/static/angular.svg";
import javascript from "../assets/svg/static/javascript.svg";
import nextJS from "../assets/svg/static/nextJS.svg";
import nuxtJS from "../assets/svg/static/nuxtJS.svg";
import react from "../assets/svg/static/react.svg";
import svelte from "../assets/svg/static/svelte.svg";
import typescript from "../assets/svg/static/typescript.svg";
import vue from "../assets/svg/static/vue.svg";
import bootstrap from "../assets/svg/static/bootstrap.svg";
import bulma from "../assets/svg/static/bulma.svg";
import capacitorjs from "../assets/svg/static/capacitorjs.svg";
import coffeescript from "../assets/svg/static/coffeescript.svg";
import memsql from "../assets/svg/static/memsql.svg";
import mongoDB from "../assets/svg/static/mongoDB.svg";
import mysql from "../assets/svg/static/mysql.svg";
import postgresql from "../assets/svg/static/postgresql.svg";
import tailwind from "../assets/svg/static/tailwind.svg";
import vitejs from "../assets/svg/static/vitejs.svg";
import vuetifyjs from "../assets/svg/static/vuetifyjs.svg";
import c from "../assets/svg/static/c.svg";
import cplusplus from "../assets/svg/static/cplusplus.svg";
import csharp from "../assets/svg/static/csharp.svg";
import dart from "../assets/svg/static/dart.svg";
import go from "../assets/svg/static/go.svg";
import java from "../assets/svg/static/java.svg";
import julia from "../assets/svg/static/julia.svg";
import kotlin from "../assets/svg/static/kotlin.svg";
import matlab from "../assets/svg/static/matlab.svg";
import php from "../assets/svg/static/php.svg";
import python from "../assets/svg/static/python.svg";
import ruby from "../assets/svg/static/ruby.svg";
import swift from "../assets/svg/static/swift.svg";
import adobeaudition from "../assets/svg/static/adobeaudition.svg";
import aws from "../assets/svg/static/aws.svg";
import deno from "../assets/svg/static/deno.svg";
import django from "../assets/svg/static/django.svg";
import firebase from "../assets/svg/static/firebase.svg";
import gimp from "../assets/svg/static/gimp.svg";
import git from "../assets/svg/static/git.svg";
import graphql from "../assets/svg/static/graphql.svg";
import lightroom from "../assets/svg/static/lightroom.svg";
import materialui from "../assets/svg/static/materialui.svg";
import nginx from "../assets/svg/static/nginx.svg";
import numpy from "../assets/svg/static/numpy.svg";
import opencv from "../assets/svg/static/opencv.svg";
import premierepro from "../assets/svg/static/premierepro.svg";
import pytorch from "../assets/svg/static/pytorch.svg";
import selenium from "../assets/svg/static/selenium.svg";
import strapi from "../assets/svg/static/strapi.svg";
import tensorflow from "../assets/svg/static/tensorflow.svg";
import webix from "../assets/svg/static/webix.svg";
import wordpress from "../assets/svg/static/wordpress.svg";

import azure from "../assets/svg/static/azure.svg";
import blender from "../assets/svg/static/blender.svg";
import fastify from "../assets/svg/static/fastify.svg";
import figma from "../assets/svg/static/figma.svg";
import flutter from "../assets/svg/static/flutter.svg";
import haxe from "../assets/svg/static/haxe.svg";
import ionic from "../assets/svg/static/ionic.svg";
import markdown from "../assets/svg/static/markdown.svg";
import microsoftoffice from "../assets/svg/static/microsoftoffice.svg";
import picsart from "../assets/svg/static/picsart.svg";
import sketch from "../assets/svg/static/sketch.svg";
import unity from "../assets/svg/static/unity.svg";
import wolframalpha from "../assets/svg/static/wolframalpha.svg";

import canva from "../assets/svg/static/canva.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "gcp":
      return gcp;
    case "html":
      return html;
    case "photoshop":
      return photoshop;
    case "docker":
      return docker;
    case "illustrator":
      return illustrator;
    case "adobe xd":
      return adobeXd;
    case "after effects":
      return afterEffects;
    case "css":
      return css;
    case "angular":
      return angular;
    case "javascript":
      return javascript;
    case "next js":
      return nextJS;
    case "nuxt js":
      return nuxtJS;
    case "react":
      return react;
    case "svelte":
      return svelte;
    case "typescript":
      return typescript;
    case "vue":
      return vue;
    case "bootstrap":
      return bootstrap;
    case "bulma":
      return bulma;
    case "capacitorjs":
      return capacitorjs;
    case "coffeescript":
      return coffeescript;
    case "memsql":
      return memsql;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "postgresql":
      return postgresql;
    case "tailwind":
      return tailwind;
    case "vitejs":
      return vitejs;
    case "vuetifyjs":
      return vuetifyjs;
    case "c":
      return c;
    case "c++":
      return cplusplus;
    case "c#":
      return csharp;
    case "dart":
      return dart;
    case "go":
      return go;
    case "java":
      return java;
    case "kotlin":
      return kotlin;
    case "julia":
      return julia;
    case "matlab":
      return matlab;
    case "php":
      return php;
    case "python":
      return python;
    case "ruby":
      return ruby;
    case "swift":
      return swift;
    case "adobe audition":
      return adobeaudition;
    case "aws":
      return aws;
    case "deno":
      return deno;
    case "django":
      return django;
    case "firebase":
      return firebase;
    case "gimp":
      return gimp;
    case "git":
      return git;
    case "graphql":
      return graphql;
    case "lightroom":
      return lightroom;
    case "materialui":
      return materialui;
    case "nginx":
      return nginx;
    case "numpy":
      return numpy;
    case "opencv":
      return opencv;
    case "premiere pro":
      return premierepro;
    case "pytorch":
      return pytorch;
    case "selenium":
      return selenium;
    case "strapi":
      return strapi;
    case "tensorflow":
      return tensorflow;
    case "webix":
      return webix;
    case "wordpress":
      return wordpress;
    case "azure":
      return azure;
    case "blender":
      return blender;
    case "fastify":
      return fastify;
    case "figma":
      return figma;
    case "flutter":
      return flutter;
    case "haxe":
      return haxe;
    case "ionic":
      return ionic;
    case "markdown":
      return markdown;
    case "microsoft office":
      return microsoftoffice;
    case "picsart":
      return picsart;
    case "sketch":
      return sketch;
    case "unity":
      return unity;
    case "wolframalpha":
      return wolframalpha;
    case "canva":
      return canva;
    default:
      break;
  }
};
