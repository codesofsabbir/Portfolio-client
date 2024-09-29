import { useRef, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
function NewProject() {
  const navigate = useNavigate();
  const fileInputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    projectLink: "",
    selectedcetagory: null,
    tags: [],
    imagesPreview: {
      thumbnail: null,
      sliderImg1: null,
      sliderImg2: null,
      sliderImg3: null,
    },
    images: {
      thumbnail: null,
      sliderImg1: null,
      sliderImg2: null,
      sliderImg3: null,
    },
    inputValue: "" // Add inputValue to the form data
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImgChange = (e, key) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setFormData((prev) => ({
        ...prev,
        images: { ...prev.images, [key]: file },
        imagesPreview: { ...prev.imagesPreview, [key]: URL.createObjectURL(file) },
      }));
    } else {
      alert("Please upload a valid image file");
    }
  };

  const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append('image', image);
    const apiKey = 'bcebdff629edacb217cfd4cf4ac9ab39';
    const url = `https://api.imgbb.com/1/upload?key=${apiKey}`;
    
    return fetch(url, {
      method: 'POST',
      body: formData,
    })
    .then((response) => response.json())
    .then((result) => {
      if (result && result.data && result.data.url) {
        return result.data.url;
      } else {
        throw new Error("Image upload failed");
      }
    })
    .catch((error) => {
      console.error("Image upload error:", error);
      return null;
    });
  };

  const handleSubmit = async () => {
    const { thumbnail, sliderImg1, sliderImg2, sliderImg3 } = formData.images;

    const thumbnailUrl = thumbnail ? await uploadImage(thumbnail) : null;
    const sliderImg1Url = sliderImg1 ? await uploadImage(sliderImg1) : null;
    const sliderImg2Url = sliderImg2 ? await uploadImage(sliderImg2) : null;
    const sliderImg3Url = sliderImg3 ? await uploadImage(sliderImg3) : null;

    if (!thumbnailUrl) {
      alert('Thumbnail upload failed. Please try again.');
      return;
    }

    const projectDetails = {
      title: formData.title,
      description: formData.description,
      projectLink: formData.projectLink,
      category: formData.selectedcetagory,
      tags: formData.tags,
      images: {
        thumbnail: thumbnailUrl,
        sliderImages: [sliderImg1Url, sliderImg2Url, sliderImg3Url].filter(Boolean),
      },
    };

    console.log('Project Details:', projectDetails);

    fetch('https://portfolio-server-yyk2.onrender.com/portfolio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectDetails),
      })
    
    if (projectDetails) {
      // Optionally clear form fields
      setFormData({
        title: "",
        description: "",
        projectLink: "",
        selectedcetagory: null,
        tags: [],
        imagesPreview: {
          thumbnail: null,
          sliderImg1: null,
          sliderImg2: null,
          sliderImg3: null,
        },
        images: {
          thumbnail: null,
          sliderImg1: null,
          sliderImg2: null,
          sliderImg3: null,
        },
        inputValue: ""
      });
    }

    navigate('/project')

  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && formData.inputValue.trim()) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, formData.inputValue.trim()],
        inputValue: "" // Clear input after adding the tag
      }));
    }
  };

  const handleDeleteTag = (tag) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((t) => t !== tag),
    }));
  };

  const categories = ['design', 'wordPress', 'blogger', 'excel', 'others'];

  return (
    <div className="w-[90%] absolute right-0">
      <div className="w-[95%]">
        <div className="w-full border-b-4 border-white mt-5 py-3 flex justify-between gap-8">
          <input
            type="text"
            name="title"
            placeholder="New Project Title"
            className="outline-none px-3 bg-transparent border border-slate-600 w-full rounded-md"
            value={formData.title}
            onChange={handleInputChange}
          />
          <button className="border border-yellow-500 px-5 py-2 rounded-md cursor-pointer" onClick={handleSubmit}>Save</button>
        </div>

        <div className="w-full mt-6 grid grid-cols-[2fr_1fr] gap-5">
          <div className="flex flex-col gap-3">
            <textarea
              name="description"
              placeholder="Your Project Details..."
              className="outline-none p-3 bg-transparent border border-slate-600 w-full h-[320px] rounded-md resize-none"
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>

            <div>
              <h3 className="p-2 text-gray-500">Slider Images</h3>
              <div className="grid grid-cols-3 gap-5">
              {['sliderImg1', 'sliderImg2', 'sliderImg3'].map((key, index) => (
                <div key={index}>
                  <div
                    className="w-full h-[120px] border border-slate-600 rounded-md cursor-pointer overflow-hidden flex items-center"
                    onClick={() => fileInputRefs[index + 1].current.click()}
                  >
                    {formData.imagesPreview[key] && <img src={formData.imagesPreview[key]} alt="Preview" className="w-full h-auto" />}
                  </div>
                  <input
                    type="file"
                    ref={fileInputRefs[index + 1]}
                    className="text-transparent bg-transparent h-0 w-0"
                    onChange={(e) => handleImgChange(e, key)}
                  />
                </div>
              ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {/* Tags Section */}
            <div className="p-3 bg-transparent border gap-2 border-slate-600 w-full h-[100px] overflow-y-auto scrollBarHide rounded-md flex flex-wrap">
              <ol className="flex gap-2 flex-wrap">
                {formData.tags.map((tag, index) => (
                  <li key={index} className="flex items-center h-fit py-1 px-2 gap-2 bg-blue-600 rounded-md">
                    <span className="text-white">{tag}</span>
                    <i className="bg-white h-3 w-3 flex justify-center items-center rounded-full cursor-pointer" onClick={() => handleDeleteTag(tag)}>
                      <RxCross2 />
                    </i>
                  </li>
                ))}
              </ol>
              <input
                placeholder="Uses Technologies..."
                className="bg-transparent max-w-32 h-fit outline-none py-1"
                name="inputValue"
                value={formData.inputValue}
                onChange={(e) =>
                  setFormData({ ...formData, inputValue: e.target.value })
                }
                onKeyDown={handleKeyDown}
              />
            </div>

            {/* Thumbnail Upload */}
            <div className="border border-slate-600 w-full h-[120px] rounded-md cursor-pointer overflow-hidden" onClick={() => fileInputRefs[0].current.click()}>
              {formData.imagesPreview.thumbnail && <img src={formData.imagesPreview.thumbnail} alt="Preview" className="w-full h-auto" />}
            </div>
            <input
              type="file"
              ref={fileInputRefs[0]}
              className="text-transparent bg-transparent h-0 w-0"
              onChange={(e) => handleImgChange(e, 'thumbnail')}
            />

            {/* Categories */}
            <div className="border border-slate-600 h-[50px] w-full rounded-md cursor-pointer">
              <select
                className="w-full outline-none bg-transparent h-full cursor-pointer px-2"
                value={formData.selectedcetagory || ""}
                onChange={(e) => setFormData({ ...formData, selectedcetagory: e.target.value })}
              >
                <option value="" disabled>Select cetagory</option>
                {categories.map((cetagory) => (
                  <option key={cetagory} value={cetagory}>{cetagory}</option>
                ))}
              </select>
            </div>

            {/* Project Link */}
            <input
              type="text"
              name="projectLink"
              placeholder="Project Link"
              className="outline-none px-3 bg-transparent border border-slate-600 w-full h-[50px] rounded-md"
              value={formData.projectLink}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewProject;
