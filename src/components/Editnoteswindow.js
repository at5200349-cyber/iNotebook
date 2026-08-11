import React, { useState, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import notecontext from '../context/notes/Notecontext'

const Editnoteswindow = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const {
        id,
        title: oldTitle,
        description: oldDescription,
        tag: oldTag
    } = location.state;

    const [title, setTitle] = useState(oldTitle);
    const [description, setDescription] = useState(oldDescription);
    const [tag, setTag] = useState(oldTag);

    const { editNote } = useContext(notecontext);

    const handleUpdate = async () => {
       const success= await editNote(id, title, description, tag);

       if(success){
        alert("Note updated successfully!");
        navigate("/dashboard");

       }
    };

    return (
        <div className="min-h-[calc(100vh-64px)] bg-gray-50 dark:bg-gray-900 px-4 py-10">

            <div className="max-w-2xl mx-auto">

                {/* Header */}
                <div className="mb-8">
                    <button
                        onClick={() => navigate("/dashboard")}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 mb-5"
                    >
                        <i className="fa-solid fa-arrow-left"></i>
                        Back to Notes
                    </button>

                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Edit Note
                    </h1>

                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                        Update your note and save your changes.
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 sm:p-8">

                    {/* Title */}
                    <div className="mb-6">
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                            Title
                        </label>

                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter note title"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                            Description
                        </label>

                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Write your note..."
                            rows="7"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white outline-none resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    {/* Tag */}
                    <div className="mb-8">
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                            Tag
                        </label>

                        <input
                            type="text"
                            value={tag}
                            onChange={(e) => setTag(e.target.value)}
                            placeholder="e.g. Work, Study, Personal"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3">

                        <button
                            onClick={() => navigate("/dashboard")}
                            className="px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                        >
                            Cancel
                        </button>

                        <button
                            onClick={handleUpdate}
                            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition flex items-center gap-2"
                        >
                            <i className="fa-solid fa-check"></i>
                            Update Note
                        </button>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Editnoteswindow