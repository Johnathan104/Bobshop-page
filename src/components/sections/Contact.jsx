
export default function Contact() {

    return (
        <section className="contact-section bg-black d-flex align-items-center justify-content-center" id="contact">
    <div className="container px-4 px-lg-5">
        <div className="row gx-5 gx-lg-5 justify-content-center">
            <div className="col-md-5 mb-3 mb-md-0">
                <div className="card py-4 h-100">
                    <div className="card-body text-center">
                        <i className="fas fa-envelope text-primary mb-2"></i>
                        <h4 className="text-uppercase m-0">Email</h4>
                        <hr className="my-4 mx-auto" />
                        <div className="small text-black-50"><a href="#!">steven12@gmail.com</a></div>
                    </div>
                </div>
            </div>
            <div className="col-md-5 mb-3 mb-md-0">
                <div className="card py-4 h-100">
                    <div className="card-body text-center">
                        <i className="fas fa-mobile-alt text-primary mb-2"></i>
                        <h4 className="text-uppercase m-0">Phone</h4>
                        <hr className="my-4 mx-auto" />
                        <div className="small text-black-50">0819 1716 1649</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="social d-flex justify-content-center mb-5 ">
            <a className="mx-2" href="#!"><i className="fab fa-twitter"></i></a>
            <a className="mx-2" href="#!"><i className="fab fa-github"></i></a>
        </div>
    </div>
</section>

    )
}
