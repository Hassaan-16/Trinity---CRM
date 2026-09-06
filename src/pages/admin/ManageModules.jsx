import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { CourseModuleModal } from './CourseModuleModal';
import { Plus, Edit2, Trash2, BookOpen, FileText, HelpCircle, Eye } from 'lucide-react';

export const ManageModules = () => {
  const {
    coursesAndModules,
    addCourseOrModule,
    updateCourseOrModule,
    deleteCourseOrModule,
    setActiveCourseId,
    switchRole
  } = useApp();

  const [editingItem, setEditingItem] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const modulesList = coursesAndModules.filter(
    item => item.category === 'module' &&
      (item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       item.code.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleSave = (formData) => {
    if (editingItem) {
      updateCourseOrModule(formData.id, formData);
      setEditingItem(null);
    } else {
      addCourseOrModule(formData);
      setIsAdding(false);
    }
  };

  const handleDelete = (id, title) => {
    if (window.confirm(`Are you sure you want to delete ${title}?`)) {
      deleteCourseOrModule(id);
    }
  };

  return (
    <div className="p-4 p-lg-5">
      {/* Header (Matching Screenshot 3) */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4 pb-2 border-bottom">
        <div>
          <h2 className="fw-bold font-heading text-dark m-0" style={{ color: '#7B1113' }}>
            Manage Modules
          </h2>
          <span className="text-secondary small">
            Configure EASA Part-66 modules, syllabus documents, revision notes, and randomized MCQ banks
          </span>
        </div>

        <div className="d-flex gap-2">
          <button
            className="btn btn-danger px-4 py-2 fw-bold d-flex align-items-center gap-2"
            style={{ backgroundColor: '#7B1113', borderColor: '#7B1113' }}
            onClick={() => setIsAdding(true)}
          >
            <Plus size={18} /> + Add Module
          </button>
        </div>
      </div>

      {/* Search Filter */}
      <div className="card border-0 shadow-sm rounded-3 p-3 bg-white mb-4">
        <div className="row g-2">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search module by title or code (e.g. Mathematics, PART66-M01)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="col-md-6 text-md-end text-muted small align-self-center">
            Showing <strong>{modulesList.length}</strong> Part-66 modules
          </div>
        </div>
      </div>

      {/* Modules Table (Matching Screenshot 3) */}
      <div className="card border-0 shadow-sm rounded-4 overflow-hidden bg-white">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr className="small text-secondary fw-semibold">
                <th style={{ width: '80px' }}>ID / Code</th>
                <th>Title</th>
                <th className="text-center" style={{ width: '100px' }}>Books</th>
                <th className="text-center" style={{ width: '100px' }}>Notes</th>
                <th className="text-center" style={{ width: '100px' }}>Quizzes</th>
                <th className="text-center" style={{ width: '120px' }}>Status</th>
                <th className="text-end" style={{ width: '200px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {modulesList.length > 0 ? (
                modulesList.map((mod, idx) => (
                  <tr key={mod.id}>
                    <td>
                      <span className="font-monospace fw-bold text-secondary small">
                        {mod.code || idx + 1}
                      </span>
                    </td>
                    <td>
                      <strong className="text-dark d-block">{mod.title}</strong>
                      <span className="text-muted small">Tuition: ${mod.price?.toFixed(2)} • {mod.duration}</span>
                    </td>
                    <td className="text-center">
                      <span className="badge bg-light text-dark border">
                        {mod.books?.length || 0}
                      </span>
                    </td>
                    <td className="text-center">
                      <span className="badge bg-light text-dark border">
                        {mod.notes?.length || 0}
                      </span>
                    </td>
                    <td className="text-center">
                      <span className="badge bg-danger bg-opacity-10 text-danger fw-bold border border-danger-subtle">
                        {mod.quizzes?.length || 0}
                      </span>
                    </td>
                    <td className="text-center">
                      <span className="badge bg-success bg-opacity-15 text-success px-3 py-2 fw-semibold">
                        {mod.status || 'Active'}
                      </span>
                    </td>
                    <td className="text-end">
                      <div className="d-flex justify-content-end gap-2">
                        <button
                          className="btn btn-sm btn-outline-secondary px-2 py-1"
                          title="Preview in Student View"
                          onClick={() => {
                            setActiveCourseId(mod.id);
                            switchRole('student');
                          }}
                        >
                          <Eye size={15} />
                        </button>
                        <button
                          className="btn btn-sm btn-warning text-dark fw-bold px-3 py-1"
                          onClick={() => setEditingItem(mod)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-danger px-3 py-1"
                          onClick={() => handleDelete(mod.id, mod.title)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-5 text-muted">
                    No Part-66 modules match your query.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add or Edit Modal */}
      {(isAdding || editingItem) && (
        <CourseModuleModal
          item={editingItem}
          isCourse={false}
          onClose={() => {
            setIsAdding(false);
            setEditingItem(null);
          }}
          onSave={handleSave}
        />
      )}
    </div>
  );
};
