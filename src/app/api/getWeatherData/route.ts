import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    const { latLng } = await request.json();
    const weatherApiUrl = `https://api.pirateweather.net/forecast/tbilmhC61Np5bKOBMtCe3Xj2Yo7SyslA/${latLng[0]},${latLng[1]}`;
    const res = await fetch(weatherApiUrl);
    const data = await res.json();
    return NextResponse.json({ data });
  } catch (error) {
    console.error(error);
    return NextResponse.json("Error fetching weather data.", { status: 400 });
  }
};
