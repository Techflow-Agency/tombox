import React, { useState } from "react";
import Modal from "react-modal";
import Social from "../Social";

Modal.setAppElement("#root");

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal(e) {
    setIsOpen(!isOpen);
    e.preventDefault();
  }

  const serviceContent = [
    {
      id: 1,
      no: "01",
      title: "Diseño personalizado de cajas:",
      text: `la capacidad de crear cajas personalizadas según las especificaciones del cliente, incluyendo tamaño, forma, material, impresión y acabado.`,
    },
    {
      id: 2,
      no: "02",
      title: "Amplia gama de materiales:",
      text: ` la posibilidad de trabajar con una amplia variedad de materiales para adaptarse a diferentes necesidades y presupuestos, incluyendo cartón corrugado, cartón sólido, papel kraft, papel estucado, entre otros.`,
    },
    {
      id: 3,
      no: "03",
      title: "Impresión de alta calidad: ",
      text: `la capacidad de imprimir diseños nítidos y claros en las cajas utilizando técnicas avanzadas de impresión, como la impresión offset o la impresión digital.`,
    },
    {
      id: 4,
      no: "04",
      title: "Servicio de prototipado",
      text: `la capacidad de crear prototipos de cajas para que los clientes puedan ver cómo se verá la caja final antes de realizar un pedido en grandes cantidades.

      `,
    },
    {
      id: 5,
      no: "05",
      title: "Entrega rápida",
      text: ` la capacidad de entregar las cajas de manera rápida y eficiente para cumplir con los plazos de entrega de los clientes.`,
    },
    {
      id: 6,
      no: "06",
      title: "Servicio al cliente excepcional",
      text: `un servicio al cliente amable y profesional que pueda ayudar a los clientes a elegir la mejor solución para sus necesidades y responder a cualquier pregunta o inquietud.`,
    },
  ];

  return (
    <>
      {serviceContent.map((item) => (
        <li key={item.id}>
          <div className="list_inner">
            <span className="number">{item.no}</span>
            <h3 className="title">{item.title}</h3>
            <p className="text">{item.text}</p>
            <div className="tokyo_tm_read_more">
             
            </div>
          </div>
        </li>
      ))}

      {/* START MODAL */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news">
          <button className="close-modal" onClick={toggleModal}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/news/2.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="#">Alex Watson</a>
                    <span>05 April 2021</span>
                  </p>
                </div>
                <h3 className="title">
                  Format releases a new tool that enables direct video hosting
                </h3>
              </div>
              {/* END DETAILS */}
              <div className="main_content ">
                <div className="descriptions">
                  <p className="bigger">
                    Just because we can't get out and about like we normally
                    would, doesn’t mean we have to stop taking pictures. There’s
                    still plenty you can do, provided you're prepared to use
                    some imagination. Here are a few ideas to keep you shooting
                    until normal life resumes.
                  </p>
                  <p>
                    Most photographers love to shoot the unusual, and you don’t
                    get much more unusual than These Unprecedented Times. Right
                    now everything counts as out of the ordinary. There are a
                    number of remarkable things about these lockdown days that
                    are worth photographing now so we can remember them when it
                    is all over.
                  </p>
                  <p>
                    Streets empty that are usually busy are remarkable and can
                    evoke the sense of historical pictures from before the
                    invention of the motorcar. Other things that are different
                    at the moment will be queues to get into stores and the
                    lines marked out on the floor to show how far apart we
                    should be.
                  </p>
                  <div className="quotebox">
                    <div className="icon">
                      <img
                        className="svg"
                        src="assets/img/svg/quote.svg"
                        alt="tumb"
                      />
                    </div>
                    <p>
                      Most photographers find it hard to see interesting
                      pictures in places in which they are most familiar. A trip
                      somewhere new seems always exactly what our photography
                      needed, as shooting away from home consistently inspires
                      us to new artistic heights.
                    </p>
                  </div>
                  {/* END QUOTEBOX */}
                  <p>
                    Pretend everything is new and that you haven’t seen it
                    before, and then you will be free to notice the leading
                    lines, the places where one edge meets another in delightful
                    geometric harmony, and how the ordinary things in the
                    kitchen are transformed when the light is on or off.
                  </p>
                  <p>
                    The trick here is to look slowly, and then look again. Take
                    the time to look in detail and to look at the same thing
                    from different angles, with different light, long lenses and
                    wide lenses. Then move to the left a bit. You may never feel
                    the need to leave the house again.
                  </p>
                </div>
                {/* END DESCRIPTION */}
                <div className="news_share">
                  <span>Share:</span>
                  <Social />
                  {/* END SOCIAL SHARE */}
                </div>
                {/* END NEWS SHARE */}
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL */}
    </>
  );
};

export default Services;
