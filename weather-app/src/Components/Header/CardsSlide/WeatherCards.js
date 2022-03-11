import React, { useState, useEffect } from "react";
import "../CardsSlide/weathercard.css";
import { Row, Col, Card, CardHeader } from "reactstrap";
import axios from "axios";
export default function WeatherCards() {
  const [weatherDatas, setWeatherDatas] = useState();
  const [weatherDatasWeekly, setWeatherDatasWeekly] = useState();
  console.log("weatherDatasWeekly: ", weatherDatasWeekly);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=24.7033&lon=84.3542&exclude=minutely,hourly&appid=02962db8b8976b2e7d9477311542fc9e`
      )
      .then((res) => {
        const weatherResult = res;
        console.log("res: ", res.data);
        setWeatherDatas(res?.data);
        setWeatherDatasWeekly(res?.data?.daily);
      });
  }, []);
  return (
    <Row className="px-3">
      <Card>
        Current Wether <br />
        City : Aurangabad (Bihar) <br /> Temperature :
        {weatherDatas?.current?.temp}
        <br /> Feels Like: {weatherDatas?.current?.feels_like}
      </Card>
      <Card className="mb-2">
        <h5>Weekly weather forcasting Aurangabad(Bihar)</h5>
      </Card>

      {weatherDatasWeekly &&
        weatherDatasWeekly.map((data, i) => {
          return (
            <Col sm="6" md="3" lg="3" xl="3">
              <ul className="cards">
                <li>
                  <a href="" className="card-weather">
                    <img
                      src="https://i.imgur.com/oYiTqum.jpg"
                      className="card__image"
                      alt=""
                    />
                    <div className="card__overlay">
                      <div className="card__header">
                        <svg
                          className="card__arc"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        <img
                          className="card__thumb"
                          src="https://i.imgur.com/7D7I6dI.png"
                          alt=""
                        />
                        <div className="card__header-text">
                          <h3 className="card__title">{"Temperature"}</h3>
                          <span className="card__status">"llkkshdjh"</span>
                        </div>
                        <div className="card__header-text">
                          <h3 className="card__title">Jessica Parker</h3>
                          <span className="card__status">1 hour ago</span>
                        </div>
                      </div>
                      <p className="card__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores, blanditiis?
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </Col>
          );
        })}
    </Row>
  );
}
