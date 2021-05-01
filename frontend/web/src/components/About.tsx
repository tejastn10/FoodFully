import { Avatar, Card, Divider } from "antd";

const About = () => {
  return (
    <div className="container">
      <Divider>Our Motto</Divider>
      <p>
        We stand against hunger. It has proven a great threat to humanity. Our
        Motto is that no one should be hungry, the basic necessity should be
        fulfilled by each and every person on earth. For this we have taken
        measures to ensure that we provide food in best conditions to each and
        every person in our vicinity and help. But this cannot be the work of
        one person, so we encourage all of you to join us in this journey.
      </p>
      <Card title="Our Team">
        We are group of young individuals with a vision to see this World get
        better.
        <Divider orientation="left">
          <Avatar
            style={{
              marginRight: "1rem",
              color: "#f56a00",
              backgroundColor: "#fde3cf",
            }}
          >
            YD
          </Avatar>
          Yadnesh Chaudhari
        </Divider>
        <p>A cool and awesome guy willing to help others always.</p>
        <Divider orientation="left">
          <Avatar
            style={{
              marginRight: "1rem",
              color: "#004b18",
              backgroundColor: "#4ef87b",
            }}
          >
            NR
          </Avatar>
          Niraj Rawat
        </Divider>
        <p>A cool and awesome guy willing to help others always.</p>
        <Divider orientation="left">
          <Avatar
            style={{
              marginRight: "1rem",
              color: "#000068",
              backgroundColor: "#9d9dff",
            }}
          >
            TN
          </Avatar>
          Tejas Nikhar
        </Divider>
        <p>A cool and awesome guy willing to help others always.</p>
      </Card>
    </div>
  );
};

export default About;
