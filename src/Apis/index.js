import Axios from "axios";
import { date } from "yup";
export const All_Employees =
  "https://api-vx-onboarding.packagex.xyz/employees/getAllEmployees";
// export const All_Form_Data =
//   "https://tvrj97vxf0.execute-api.us-east-1.amazonaws.com/dev/Allforms";
export const All_Form_Data =
  "https://api-vx-onboarding.packagex.xyz/forms/getFormData";
export const Insert_Employees_Data =
  "https://api-vx-onboarding.packagex.xyz/employees/insertEmployee";
export const All_Users =
  "https://tvrj97vxf0.execute-api.us-east-1.amazonaws.com/dev/all-users";
export const All_Employees_Form_Status_Detail =
  "https://tvrj97vxf0.execute-api.us-east-1.amazonaws.com/dev//formStatus-detail";

export const getUsers = async () => {
  try {
    const response = await Axios.get(
      `${process.env.REACT_APP_BASEURL}/users/showUser`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserById = async (id) => {
  try {
    const response = await Axios.delete(
      `${process.env.REACT_APP_BASEURL}/users/deleteUser?userId=${id}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

// export const getForm = async() =>{
//   try{
//     const response = await Axios.get(
//       `${process.env.REACT_APP_BASEURL}/forms/basicForm`
//     );
//     return response.data;
//   } catch (error){
//     console.log(error)
//   }
// }

export const createNewUser = async ({ name, designantion, email }) => {
  try {
    const body = {
      user_name: name,
      email: email,
      role_id: 2,
      designantion: designantion,
      description: "working on javaScript",
    };
    const responce = await Axios.post(
      `${process.env.REACT_APP_BASEURL}/users/insertUser`,
      body
    );
    return responce;
  } catch (error) {
    console.log({ ...error });
  }
};

export const getEmployees = async () => {
  try {
    const response = await Axios.get(
      `${process.env.REACT_APP_BASEURL}/employees/getAllEmployees`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const createEmployees = async ({
  employee_name,
  designation,
  date_of_joining,
  category,
}) => {
  try {
    const body = {
      // "employee_id": 2,
      employee_name,
      designation,
      date_of_joining,
      // "user_id": 16,
      // "created_at": "2021-11-19T00:37:07.385Z",
      // "updated_at": "2021-11-19T00:37:07.385Z",
      // "employee_status": category,
      // "image_url": "",
      // "video_url": null,
      // "department_id": 3,
      // "employement_catagory_id": 1,
      // "line_manager_id": null,
      // "buddy_id": null
    };
    const response = await Axios.post(
      `${process.env.REACT_APP_BASEURL}/employees/insertEmployee`,
      body
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getForms = async () => {
  try {
    const response = await Axios.get(
      `${process.env.REACT_APP_BASEURL}/forms/basicForm`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const createForm = async (data) => {
  try {
    const response = await Axios.post(
      `${process.env.REACT_APP_BASEURL}/forms/addForm`,
      data
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updateForm = async (data) => {
  try {
    const response = await Axios.put(
      `${process.env.REACT_APP_BASEURL}/forms/updateForm`,
      data
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
// export const getUserById = async (id) => {
//   try {
//     const response = await Axios.delete(
//       `${process.env.REACT_APP_BASEURL}/users/deleteUser?userId=${id}`
//     );
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };
export const AssignForm = async (data) => {
  try {
    console.log("data",data);
    const response = await Axios.post(
      `${process.env.REACT_APP_BASEURL}/forms/assignForm`,
      data
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};


export const getFormsData = async () => {
  try {
    const response = await Axios.get(
      `${process.env.REACT_APP_BASEURL}/forms/getFormData?employee_id={id}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};


// export const getformById = async (id) => {
//   try {
//     const response = await Axios.delete(
//       `${process.env.REACT_APP_BASEURL}/forms/deleteForm?form_id=${id}`
//     );
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };