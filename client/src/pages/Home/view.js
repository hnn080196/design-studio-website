import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { data } from "pages/data";
import { IconButton, useMediaQuery } from "@mui/material";
import { ArrowForwardIosRounded, ArrowBackIosRounded } from "@mui/icons-material";
import { useState } from "react";
import classNames from "classnames";
function Home() {
  const matches = useMediaQuery("(max-width:1250px)");
  const [show, setShow] = useState(false);
  const handelToggle = (event) => {
    event.preventDefault();
    console.log("run");
    setShow(!show);
  };
  return (
    <section className="home">
      <Carousel>
        {data.map((item, index) => (
          <Carousel.Item
            key={index}
            className="home--bg"
            style={{ backgroundImage: `url('${item.image}')`, height: "calc(100vh - 81px)", width: "100%" }}
          ></Carousel.Item>
        ))}
      </Carousel>
      <div className={classNames("home--intro", { ["show"]: !matches || show })}>
        {(!matches || show) && (
          <div className={classNames("home--content")}>
            <h3>SOSA Studio - Kiến trúc nuôi dưỡng tâm hồn</h3>
            <p>
              &emsp; SOSA Studio là Công ty Thiết Kế Kiến Trúc, nội thất và cảnh quan tại Việt Nam. Nơi việc tạo ra
              những ngôi nhà ( công trình) đương đại mang hơi thở của sự bình yên. Mỗi không gian và chi tiết kiến trúc
              được tạo ra, chúng tôi luôn hướng đến chất cảm trong tâm hồn mỗi con người sống trong không gian đó ( chủ
              nhân của ngôi nhà). Mỗi dự án khi tiếp nhận chúng tôi luôn tìm cách tạo ra kiến trúc phù hợp với đặc thù
              riêng của từng dự án. Luôn đồng hành cùng khách hàng trong toàn bộ quá trình từ những bước ban đầu thiết
              kế ý tưởng cho đến khi hoàn thiện dự án. Với con mắt nhạy bén trong thiết kế chú ý đến các chi tiết và
              chất cảm trong không gian giúp chúng tôi tạo ra kiến trúc độc đáo, vượt thời gian.
              <br />
              Tại SOSA Studio – Đó là một tuyên ngôn trong thiết kế của chúng tôi.
              <br />
              <br />
              Trân trọng !
            </p>
          </div>
        )}
        {matches && (
          <IconButton sx={{ color: "#fff", zIndex: 2 }} onClick={(event) => handelToggle(event)}>
            {!show ? <ArrowForwardIosRounded /> : <ArrowBackIosRounded />}
          </IconButton>
        )}

        {/* !matches || show */}
      </div>
    </section>
  );
}

export default Home;
