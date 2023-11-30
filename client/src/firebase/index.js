import { storage, firestore } from "./config";
import { setDoc, getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { v4 as uuid } from "uuid";

export const postProject = async(project) => {
  try {
    const projectId = uuid();
    project.data.screenshotURL = await uploadProjectScreenshot(projectId, project.screenshot)
    await setDoc(doc(firestore, "projects", projectId), project.data);

    return {success: true, newProject: project.data};
  } catch(e) {
    return e;
  }
}

export const getProjects = async() => {
  try{
    const querySnapshot = await getDocs(collection(firestore, "projects"));

    const result = []
    querySnapshot.forEach((doc) => {
      const project = doc.data()
      project.id = doc.id;
      result.push(project);
    });

    const projects = result.length < 1 ?
    new Error("No projects found") : result

    return projects;
  }catch(e) {
    return e;
  }
}

export const deleteProject = async(id) => {
  try{
    const screenshotDeleted = await deleteProjectScreenshot(id);
    if (screenshotDeleted === "Screenshot Deleted") {
      await deleteDoc(doc(firestore, "projects", id));
      return "Project Deleted";
    }
  }catch(e) {
    return e;
  }
}

export const uploadProjectScreenshot = async(projectId, file) => {
  try{
    const storageRef = ref(storage, `projects/screenshots/${projectId}`);

    const snapshot = await uploadBytes(storageRef, file);

    if (snapshot.metadata) {
      // update photoURL field for user in database
      // then return url to client to update state
     const screenshotURL = await getDownloadURL(snapshot.ref);
      return screenshotURL;
    }

     return new Error("Failed to upload screenshot", 400)
  }catch(e) {
    return e;
  }
}

export const deleteProjectScreenshot = async(projectId) => {
  try {
    const screenshotRef = ref(storage, `projects/screenshots/${projectId}`);
    await deleteObject(screenshotRef);
    return "Screenshot Deleted";
  } catch (error) {
    return error;
  }
}

export const postSkill = async(skill) => {
  try {
    await setDoc(doc(firestore, "skills", uuid()), skill);

    return "Skill Posted";
  } catch(e) {
    return e;
  }
}

export const getSkills = async() => {
  try{
    const querySnapshot = await getDocs(collection(firestore, "skills"));

    const result = []
    querySnapshot.forEach((doc) => {
      const skill = doc.data()
      skill.id = doc.id;
      result.push(skill);
    });

    const skills = result.length < 1 ?
    new Error("No skills found") : result

    return skills;
  }catch(e) {
    return e;
  }
}