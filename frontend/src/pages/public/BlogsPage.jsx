import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Calendar, User, Clock, ArrowRight, BookOpen, X } from 'lucide-react';

export const BlogsPage = () => {
  const { blogsData } = useApp();
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge bg-warning text-dark px-3 py-2 text-uppercase fw-bold mb-2">Technical Insights</span>
          <h1 className="fw-bold font-heading text-dark display-5">Aviation Regulatory & Engineering Articles</h1>
          <p className="text-secondary lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
            Stay updated with recent EASA regulatory amendments, examination advice, and industry best practices from our faculty.
          </p>
        </div>

        <div className="row g-4">
          {blogsData.map(blog => (
            <div key={blog.id} className="col-lg-4 col-md-6">
              <div className="card border-0 rounded-4 shadow-sm h-100 bg-white overflow-hidden d-flex flex-column">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="card-img-top object-fit-cover"
                  style={{ height: '200px' }}
                />
                <div className="p-4 d-flex flex-column flex-grow-1">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge bg-danger bg-opacity-10 text-danger fw-semibold">{blog.category}</span>
                    <span className="text-muted small d-flex align-items-center gap-1">
                      <Clock size={13} /> {blog.readTime}
                    </span>
                  </div>

                  <h5 className="fw-bold text-dark mb-2">{blog.title}</h5>
                  <p className="text-secondary small mb-4 flex-grow-1">{blog.summary}</p>

                  <div className="pt-3 border-top mt-auto d-flex justify-content-between align-items-center">
                    <div className="small text-muted">
                      <span className="d-block text-dark fw-semibold">{blog.author}</span>
                      <span>{blog.date}</span>
                    </div>
                    <button
                      className="btn btn-sm btn-outline-trinity rounded-pill px-3"
                      onClick={() => setSelectedBlog(blog)}
                    >
                      Read <ArrowRight size={14} className="ms-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal to Read Full Blog */}
        {selectedBlog && (
          <div className="modal show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', zIndex: 1050 }} tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
              <div className="modal-content border-0 rounded-4 overflow-hidden">
                <div className="modal-header text-white px-4 py-3" style={{ background: 'linear-gradient(90deg, #590B0D 0%, #7B1113 100%)' }}>
                  <h5 className="modal-title fw-bold text-white mb-0">{selectedBlog.title}</h5>
                  <button type="button" className="btn-close btn-close-white" onClick={() => setSelectedBlog(null)}></button>
                </div>
                <div className="modal-body p-4">
                  <img
                    src={selectedBlog.image}
                    alt={selectedBlog.title}
                    className="w-100 rounded-3 mb-4 object-fit-cover"
                    style={{ maxHeight: '280px' }}
                  />
                  <div className="d-flex align-items-center gap-3 text-muted small mb-3 pb-3 border-bottom">
                    <span><strong>By:</strong> {selectedBlog.author}</span>
                    <span>•</span>
                    <span>{selectedBlog.date}</span>
                    <span>•</span>
                    <span className="badge bg-warning text-dark">{selectedBlog.category}</span>
                  </div>
                  <h5 className="fw-bold text-dark mb-3">{selectedBlog.summary}</h5>
                  <p className="text-secondary leading-relaxed">
                    {selectedBlog.content}
                  </p>
                  <p className="text-secondary leading-relaxed">
                    Under EASA regulations, keeping abreast of Airworthiness Directives (ADs) and Safety Information Bulletins (SIBs) is vital for licensed certifying staff. Regular review of the Trinity question banks reinforces statutory compliance and equips candidates with deep problem-solving skills necessary on the hangar floor.
                  </p>
                </div>
                <div className="modal-footer bg-light">
                  <button type="button" className="btn btn-secondary px-4" onClick={() => setSelectedBlog(null)}>
                    Close Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
