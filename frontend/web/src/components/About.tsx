const About = () => {
  return (
    <div>
      <section id="about-info" className="bg-light-py-3">
        <div className="container">
          <div className="info-left">
            <h1 className="l-heading">
              <span className="text-primary">About</span> Our Moto
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo sequi corporis distinctio atque corrupti iste quos ipsum
              sunt nisi maiores qui incidunt veniam nobis nemo aliquam voluptas,
              ratione delectus veritatis?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              commodi deserunt reiciendis? Laudantium, beatae sapiente? Mollitia
              illum eveniet iste autem voluptatem saepe, ipsa ipsum sit magni ad
              suscipit corrupti nostrum.
            </p>
          </div>
          <div className="info-right">
            <img
              src="https://thumbs.dreamstime.com/b/foods-donate-holiday-food-drive-donation-christmas-charity-volunteers-collect-cardboard-box-aid-cans-groceries-vector-200001894.jpg"
              alt="img"
            />
          </div>
        </div>
      </section>

      <div className="clr"></div>

      <section id="testimonials" className="py-3">
        <div className="container">
          <h2 className="l-heading">About Our Team</h2>
          <div className="testimonial bg-primary">
            <img src="" alt="Yadnesh" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus non et delectus, eos moles
            </p>
          </div>

          <div className="testimonial bg-primary">
            <img src="" alt="Niraj" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus non et delectus, eos moles
            </p>
          </div>

          <div className="testimonial bg-primary">
            <img src="" alt="Tejas" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus non et delectus, eos moles
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
