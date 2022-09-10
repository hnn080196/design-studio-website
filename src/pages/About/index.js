import Banner from "CommonComponent/Banner";
import React from "react";

const About = (props) => {
  return (
    <>
      <Banner title="About Us" />
      <div className="container">
        <div className="about-wrap">
          <div className="title">
            <h3
              style={{
                paddingBottom: 30,
                fontFamily: "Arial,Helvetica,sans-serif",
                fontSize: 18,
                fontWeight: 400,
                textTransform: "uppercase",
                fontStyle: "normal",
                letterSpacing: 8,
                textDecoration: "none",
                lineHeight: "1.4em",
                borderBottom: "1px solid #ddd",
              }}
            >
              welcome to X11 Studio
            </h3>
          </div>
          <div>
            {" "}
            <p>
              X11&nbsp;Design Studio là một công ty thiết kế kiến trúc, nội thất
              và cảnh quan được thành lập vào năm 2018.
              <br />Ở mỗi dự án, chúng tôi luôn hướng đến những ý
              tưởng&nbsp;thiết kế sáng tạo và độc đáo. Nhưng&nbsp;sẽ
              không&nbsp;là gì nếu không có yếu tố chi tiết và sự tinh tế, đó là
              những điều tuy nhỏ bé nhưng&nbsp;vô cùng&nbsp;quan trọng. Với con
              mắt quan tâm đến thiết kế, đôi tay chú ý đến các chi tiết và sự
              quyết tâm giúp chúng tôi tạo ra những sản phẩm kiến ​​trúc độc
              đáo, vượt thời gian. Tại X11, đó là kim chỉ nam&nbsp;của chúng
              tôi, tập trung vào chất lượng cao với sự chú ý đến từng chi tiết
              trong việc thực hiện các dự án chuyên nghiệp, chúng tôi tiếp cận
              từng dự án theo một cách riêng biệt để phù hợp với những đặc thù
              riêng của dự án. Để phấn đấu đưa đến khách hàng một sản phẩm hoàn
              thiện nhưng không kém phần độc đáo. Và với những điều&nbsp;đó,
              chúng tôi mong mang lại sự trau dồi và cống hiến để thực hiện ước
              mơ của bạn.
              <br />
              Thân...!
            </p>
          </div>
        </div>
        <div className="about-wrap">
          <div className="title">
            <h3
              style={{
                paddingBottom: 30,
                fontFamily: "Arial,Helvetica,sans-serif",
                fontSize: 18,
                fontWeight: 400,
                textTransform: "uppercase",
                fontStyle: "normal",
                letterSpacing: 8,
                textDecoration: "none",
                lineHeight: "1.4em",
                borderBottom: "1px solid #ddd",
              }}
            >
              Our Awards
            </h3>
          </div>
          <p>
            TƯ VẤN THIẾT KẾ, NỘI THẤT, NGOẠI CẢNH CHO CÁC CÔNG TRINH DÂN DỤNG VÀ
            THƯƠNG MẠI- DỊCH VỤ
          </p>
          <div className="row"></div>
        </div>
      </div>
    </>
  );
};

export default About;
