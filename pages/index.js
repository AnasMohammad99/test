import React from "react";
import Image from "next/image";
import result1 from "../assets/1w.png";
import result2 from "../assets/2w.png";
import coverPhoto from "../assets/asd.jpg";
import mainPhoto from "../assets/bg.png";
import brainPhoto from "../assets/m.jpg";
import buyPhoto from "../assets/e.jpg";
import Alert from "../components/Alert";
import axios from "axios";

const Home = () => {
  const [username, setUsername] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [alert, setAlert] = React.useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    const referrerWebsite = document.referrer;
    e.preventDefault();
    if (!username || !phoneNumber) {
      showAlert(true, "danger", "هناك حقل فارغ");
    } else if (phoneNumber.length !== 11) {
      showAlert(true, "danger", "رقم الهاتف خطأ");
    } else {
      axios
        .post("", {
          username,
          phoneNumber,
          referrerWebsite,
        })
        .then((response) => {})
        .catch((error) => {});
      console.log(username, phoneNumber, referrerWebsite);
      setUsername("");
      setPhoneNumber("");
      showAlert(true, "success", "تمت العملية بنجاح");
    }
  };
  const showAlert = (show, type, msg) => {
    setAlert({ show, type, msg });
    return;
  };

  return (
    <div className="">
      <div className="bg-blue-900 w-full flex flex-col justify-center items-center p-10">
        <div className="w-32 h-32">
          <Image src={coverPhoto} />
        </div>
        <div className="pt-8 sm:text-2xl md:text-4xl font-bold text-white">
          جيل الفحولة الاصلي رقم واحد في العالم
        </div>
      </div>
      <div className="bg-red-800 pb-20">
        <div className="md:flex md:flex-row pt-12  md:px-20 md:pt-8 sm:flex-col sm:justify-center sm:items-center">
          <div className="pt-12 md:pt-16 md:w-[45rem] md:h-[22.5]">
            <Image src={mainPhoto} />
          </div>
          <div className="flex flex-col justify-center items-center md:pl-20 md:pt-10">
            <p className="text-4xl font-bold py-8 md:py-24 md:pb-16 ">
              Asclepius Gel
            </p>
            <ul className="list-disc mx-4 md:mx-0 pb-8">
              <li className="md:pb-6 "> حل نهائى للمشاكل الجنسيه لدى الرجال</li>
              <li className="md:pb-6"> علاقه اطول و تحكم اكثر فى وقت القذف</li>
              <li className="md:pb-6"> حل طبيعى لزياده القضيب طول و عرض</li>
              <li className="md:pb-6"> انتصاب قوى وثابت لنهايه العلاقه</li>
              <li className="md:pb-6">
                منتج طبيعي وأمن من مكونات وزيوت طبيعية
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full  flex justify-center md:pt-28">
          <button className="bg-[#00ab00] text-white py-6 px-6 rounded-md">
            <p className="text-3xl font-bold pb-5">
              <a href="#order">اطلب الآن</a>
            </p>
            <p className="text-lg">خصم 40% لفترة محدودة</p>
          </button>
        </div>
      </div>
      <div className="mx-2 md:mx-36">
        <div className="">
          <p className="font-semibold text-gray-500 text-xl text-right my-6">
            طريقه عمله
          </p>
          <div className="flex justify-center">
            <Image src={brainPhoto} />
          </div>
          <p className="font-semibold text-gray-500 text-xl mt-6 text-center ">
            تتوغل مكوناتة فى بطانه النسيج الكهفى للعضو الذكرى ليعمل على تنشيط
            الخلايا و الاوعية الدموية لضخ الدم ليجعل القضيب منتصبا وزياده حجمه
            طولا و عرضا ويأخر القذف ليزيد من الاثاره و النشاط الجنسى و يغنيك عن
            عمليات تكبير العضو المكلفة و الغير مضمونة
          </p>
        </div>
        <div className="">
          <p className=" text-right text-gray-500 font-semibold text-xl my-6">
            النتيجة
          </p>
          <div className="flex flex-col  justify-center md:flex-row">
            <Image
              src={result1}
              alt="Picture of the author"
              width={550}
              height={400}
            />
            <Image src={result2} width={550} height={400} />
          </div>
        </div>
      </div>
      <div className="bg-gray-700">
        {/*   */}
        <div className="md:mx-36 md:mt-8">
          {/* <p className="font-semibold text-gray-500 text-xl text-right my-6">
            طريقه عمله
          </p> */}
          <div className="pt-6">
            {alert.show && <Alert {...alert} removeAlert={showAlert} />}
          </div>
          <div id="order" className="flex justify-center ">
            <Image src={buyPhoto} />
          </div>
          <p className="font-semibold text-gray-500 text-xl my-6 text-center ">
            لطلــب المنتج سجـل بياناتك وسوف يقوم احد ممثلي خدمة العملاء بالتواصل
            معكم المنتج طبيعي %100 وامن تماما ليس له اي اثار جانبية كما انه حاصل
            علي تصريح وزارة الصحة المصرية
          </p>
          <form className="flex flex-col md:px-64" onSubmit={handleSubmit}>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow-md m-3 border p-3 text-right"
              type="text"
              placeholder="الإسم"
            />
            <input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="shadow-md m-3 border p-3 text-right"
              type="text"
              placeholder="رقم الهاتف"
            />
            <button className="bg-green-700 text-white mx-2 mt-2 p-4 rounded-lg">
              إطلب
            </button>
          </form>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-lg font-bold py-8 text-white">
            خصم 40% لفترة محدودة
          </p>
          <p className="text-lg font-bold text-white text-center">
            ضمان استرجاع المنتج خلال 14 يوم في حالة عدم رضائك عن النتائج
          </p>
          <div className="py-8">
            <img src="https://tereva.club/asclepius/images/b1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
