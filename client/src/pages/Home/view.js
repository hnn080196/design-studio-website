import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { data } from "pages/data";
function UncontrolledExample() {
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
      <div className="home--intro">
        <div className="home--content">
          <h3>Xin Chào</h3>
          <p>
            X11 Design Studio là công ty thiết kế kiến trúc, nội thất và cảnh quan được thành lập vào năm 2018. Phương
            châm thiết kế của chúng tôi là tìm đến những ý tưởng thiết kế sáng tạo và độc đáo. Điều đó là chưa đủ nếu
            không có yếu tố chi tiết và sự tinh tế trong từng đường nét, đó có thể là những điều tuy nhỏ bé nhưng vô
            cùng quan trọng. Với đôi mắt luôn quan sát tổng thể, đôi tay chú ý đến các chi tiết và sự quyết tâm cao độ
            giúp chúng tôi tạo ra những sản phẩm kiến ​​trúc độc đáo, vượt thời gian. Tại X11 Design Studio, đó là kim
            chỉ nam, chúng tôi tiếp cận từng dự án theo một cách riêng biệt, phù hợp với những đặc thù riêng của dự án.
            Để cố gắng đưa đến khách hàng một sản phẩm hoàn thiện, tinh tế nhưng không kém phần độc đáo và thú vị. Và
            với những điều đó, chúng tôi mong mang lại sự trải nghiệm và cống hiến để thực hiện ước mơ của bạn. Thân...!
          </p>
        </div>
      </div>
    </section>
  );
}

export default UncontrolledExample;
