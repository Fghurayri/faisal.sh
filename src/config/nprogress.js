import { Router } from "next/router";
import Nprogress from "nprogress";

export const initNprogress = () => {
  Router.events.on("routeChangeStart", function () {
    Nprogress.start();
  });

  Router.events.on("routeChangeComplete", function () {
    Nprogress.done();
  });

  Router.events.on("routeChangeError", function () {
    Nprogress.done();
  });
};
