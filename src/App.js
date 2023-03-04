import "./App.css";
import { Card } from "./Card";

function App() {
  const card_data = [
    {
      title: "pro",
      price: "$0",
      user_details: { user: "Single User", highlight: false },
      storage: "5GB Storage",
      pvt_prjct_class: { li_Class: "text-muted", i_class: "fas fa-times" },
      phne_support_class: { li_Class: "text-muted", i_class: "fas fa-times" },
      domain_class: { highlight: true,li_Class: "text-muted", i_class: "fas fa-times"},
      reports_class: { li_Class: "text-muted", i_class: "fas fa-times" },
    },
    {
      title: "plus",
      price: "$9",
      user_details: { user: "5 Users", highlight: true },
      storage: "50GB Storage",
      pvt_prjct_class: { li_Class: "", i_class: "fas fa-check" },
      phne_support_class: { li_Class: "", i_class: "fas fa-check" },
      domain_class: {highlight: true,li_Class: "",i_class: "fas fa-check"},
      reports_class: { li_Class: "text-muted", i_class: "fas fa-times" },
    },
    {
      title: "pro",
      price: "$49",
      user_details: { user: "Unlimited Users", highlight: true },
      storage: "150GB Storage",
      pvt_prjct_class: { li_Class: "", i_class: "fas fa-check" },
      phne_support_class: { li_Class: "", i_class: "fas fa-check" },
      domain_class: {highlight: false ,li_Class: "",i_class: "fas fa-check"},
      reports_class: { li_Class: "", i_class: "fas fa-check" },
    },
  ];

  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {card_data.map((data, index) => (
            <Card data={data} key={index} />
          ))}
          ;
        </div>
      </div>
    </section>
  );
}

export default App;
