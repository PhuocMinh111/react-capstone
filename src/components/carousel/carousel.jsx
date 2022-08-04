import React, { useState, useEffect } from "react";
import fetchBannerApi from "../../service/banner.js/bannerApi";
export default function Carousel() {
  useEffect(() => {
    fetchBanner();
  }, []);
  async function fetchBanner() {
    const result = await fetchBannerApi();
    console.log(result);
  }
  return <>Carousel</>;
}
