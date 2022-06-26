import React from "react";


export default function HeaderHome() {
  return (
    <>
      {/* Header */}
        {/* Hero Section */}
        <section className="bg-image img-fluid bg-overlay">
          {/* Flex Container */}
          <div className="py-5 container">
            <div className="p-4 p-md-5 mt-5 text-white">
              <div className="row">
                <div className="col-md-6 px-0 ">
                  <div className="d-flex align-self-end" style={{height: "100%"}}>
                    <div className="vr"></div>
                    <div>
                      <h4 className="display-6">                  
                        مركز المدونة</h4>
                      <p className="text-white my-2">مركز للتعليم ونشر المعرفة عبر المقالات والدونات المتخصصة بموضوعات التجارة الإلكتروني والاقتصاد والتقنية، وما يخص حياتنا كتجار، كل ما ترديه عن التجارة الالكترونيه والاقتصاد</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
