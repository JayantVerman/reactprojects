import React from "react";

// const contacts = [
//     {key:1,
//     name : 'jani',
//     img: 'https://from.com',
//     phone:'067894532',
//     email:'janikov@gmail.com'
//     },{key:2,
//         name : 'mani',
//         img: 'https://rom.com',
//         phone:'167894532',
//         email:'manikov@gmail.com'
//         },{key:3,
//             name : 'vani',
//             img: 'https://crom.com',
//             phone:'467894532',
//             email:'vanikov@gmail.com'
//             }
// ]

function ContCard(contact) {
  return (
    <Card
      name={contact.name}
      img={contact.img}
      phone={contact.tel}
      email={contact.email}
    />
  );
}

function Card(props) {
  return (
    <div className="jody">
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img className="circle-img" src={props.img} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p className="info">{props.tel}</p>
          <p className="info"> {props.email} </p>
        </div>
      </div>
    </div>
  );
}
export default Card;
export { ContCard };
