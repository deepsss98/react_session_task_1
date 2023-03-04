export function Card({ data }) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">{data.title}</h5>
          <h6 className="card-price text-center">{data.price}<span className="period">/month</span></h6>
          <hr />
          <ul className="fa-ul">
            {data.user_details.highlight ?
              (<li><span className="fa-li"><i className="fas fa-check"></i></span>
                <strong>{data.user_details.user}</strong></li>) :
              (<li><span className="fa-li"><i className="fas fa-check"></i></span>{data.user_details.user}</li>)}
            <li><span className="fa-li"><i className="fas fa-check"></i></span>{data.storage}</li>
            <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
            <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
            <li className={data.pvt_prjct_class.li_Class}>
              <span className="fa-li"><i className={data.pvt_prjct_class.i_class}></i></span>
              Unlimited Private Projects
            </li>
            <li className={data.phne_support_class.li_Class}>
              <span className="fa-li"><i className={data.phne_support_class.i_class}></i></span>
              Dedicated Phone Support
            </li>
            {data.domain_class.highlight ? (<li className={data.domain_class.li_Class}>
              <span className="fa-li"><i className={data.domain_class.i_class}></i></span>
              Free Subdomain</li>) : (<li className={data.domain_class.li_Class}>
                <span className="fa-li"><i className={data.domain_class.i_class}></i></span>
                <strong>Unlimited </strong>Free Subdomains </li>)}
            <li className={data.reports_class.li_Class}>
              <span className="fa-li"><i className={data.reports_class.i_class}></i></span>
              Monthly Status Reports
            </li>
          </ul>
          <div className="d-grid">
            <a href="/#" className="btn btn-primary text-uppercase"> Button </a>
          </div>
        </div>
      </div>
    </div>
  );
}
