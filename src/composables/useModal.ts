import { ref } from 'vue';
import { getUserInfo } from './useUserInfo'; 


const openModal = ref<boolean>(false);
const dataModal = ref<any>(null);
const scrollOff = ref<boolean>(false);



export const toggleModal = () => {
  
  openModal.value = !openModal.value;
  scrollOff.value = !scrollOff.value;
  if(scrollOff.value){
    document.body.style.overflow = 'hidden';
  }
  else{
    document.body.style.overflow = 'auto';
  }
};


export const createModal = async (data: { owner: { login: string } }) => {
  try {
    toggleModal(); 
    const userInfo = await getUserInfo(data.owner.login);
    dataModal.value = userInfo;
    const centerModal = document.getElementById('centerModal');
    if (centerModal) {
      centerModal.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    console.log('createModal:', dataModal.value);
  } catch (error) {
    console.error('Nao conseguiu adquirir as informacoes de usuari:', error);
    dataModal.value = null; 
  }
};


export { openModal, dataModal };