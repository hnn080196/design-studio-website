import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { data } from "pages/data";
import { IconButton, useMediaQuery } from "@mui/material";
import { ArrowForwardIosRounded, ArrowBackIosRounded } from "@mui/icons-material";
import { useState } from "react";
import classNames from "classnames";
import background from "assets/images/AboutUs/aboutus.jpg";
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
        <Carousel.Item
          className="home--bg"
          style={{ backgroundImage: `url('${background}')`, height: "calc(100vh - 81px)", width: "100%" }}
        ></Carousel.Item>
      </Carousel>
      <div className={classNames("home--intro", { ["show"]: !matches || show })}>
        {(!matches || show) && (
          <div className={classNames("home--content")}>
            <h3>SOSA Studio - Kiến trúc nuôi dưỡng tâm hồn,</h3>
            <p>
              &emsp; Tại SOSA Studio chúng tôi luôn đồng hành cùng khách hàng từ bước ban đầu thiết kế ý tưởng đến khi
              hoàn thành dự án. Mỗi một dự án đều mang một câu chuyện, một tâm hồn của mỗi khách hàng, từ những kinh
              nghiệm và sự tận tâm chúng tôi luôn tìm kiếm sáng tạo những ý tưởng thiết kế phù hợp để gửi gắm tâm hồn
              chủ nhân vào từng không gian sống. Bằng sự tận tâm và nhưng kinh nghiệm của mình, chúng tôi luôn sáng tạo
              ra những thiết kế độc đáo . Sự hài lòng của khách hàng luôn được đặt lên hàng đầu.
              <br />
              Tư vấn thiết kế Kiến trúc, nội thất và cảnh quan các công trình dân dụng và thương mại.
              <br />
              <br />
              <br />
              Địa chỉ: 466/41, Lê Văn Sỹ, Phường 14, Quận 3, TP HỒ CHÍ MINH
              <br />
              SĐT: 0962944204
              <br />
              Email: sosastudiovn@gmail.com
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
