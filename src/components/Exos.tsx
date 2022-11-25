import { queries } from "@testing-library/react";
import { type } from "@testing-library/user-event/dist/type";
import { wrap } from "module";
import React, {
  Dispatch,
  EventHandler,
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fakeDataUser } from "./Routing";

type TProps = {
  colorProp?: string;
};
export const Exo = () => {
  //** exo1
  //     const [message, setMessage] = useState<string>("")
  //   return (
  //     <div>
  //         <div>{message===''? "empty text" : message}</div>
  //         <input type={'text'} onChange={(e)=>setMessage(e.target.value)}></input>
  //         <button onClick={()=>alert(message)}>send</button>
  //     </div>
  //   )

  //** exo2

  // const [color, setColor] = useState<string>('red')
  // const [w, setW] = useState<string>('100px')
  // const [h, setH] = useState<string>('100px')
  // return (

  //   <div>
  //       <div onMouseOver={()=>{
  //         setColor('yellow')
  //         setW('200px')
  //         setH('200px')
  //     }} onMouseOut={()=>{
  //             setColor('red')
  //             setW('100px')
  //             setH('100px')

  //             }} style={{width: `${w}`, height : `${h}`, backgroundColor: `${color}`}}></div>
  //   </div>
  // )

  //** exo2

  //     const [color, setColor] = useState<string>('black')

  //    const Square = ()=> {
  //     const [isHover, setIsHover] = useState(false)
  //     return <div style={{width: 100, height: 100, backgroundColor:isHover? 'red' : color, margin: 2}} onMouseOver={()=>setIsHover(true)}></div>
  //    }

  //       const squares= Array(16).fill(<Square/>)

  //     return (
  //       <div style={{display: 'flex', flexWrap: 'wrap' ,width: 500} }>{squares}</div>
  //     );

  //*3
  // const [countries, setCountries] = useState<string[]>(['Paris', 'New York', 'Berlin'])
  // const [newCountries, setNewCountries] = useState<string>('')
  // const [rerender, setRerender] = useState<boolean>(false)
  // console.log(newCountries)
  // const deleteById = (id: number) =>{
  //     const update = countries.filter((i,key)=> key !== id)
  //     setCountries(update)
  // }
  // const updateById = (id: number) =>{
  //     setRerender(prev=>!prev)
  //     countries[id] = newCountries
  // }
  //     const list = countries.map((i, key)=>(
  //     <li key={key}>{i}
  //         <button onClick={()=>deleteById(key)}>delete</button>
  //         <button onClick={()=>updateById(key)}>modification</button>
  //     </li>))
  //   return (
  //     <div>
  //         <ul>{list}</ul>
  //         <input onChange={(e)=>setNewCountries(e.target.value)}></input>
  //         <button onClick={()=>setCountries(prev=> [...prev,newCountries])}>testing</button>
  //     </div>
  //   );

  //*4
  // const [images, setImages] = useState<string[]>(
  //     [
  //         "https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg",
  //         "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300",
  //         "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
  //     ]
  // )

  // const link = images.map((i, key)=><img key={key} src={i} alt={'image'+key} style={{width : 100, height: 100}}/>)

  // return (
  //     <div>
  //        <button onClick={()=>{
  //         const update = images.filter((i,key)=> key !== images.length-1)
  //         setImages(update)
  //        }}>Delete last image</button>
  //        {link}
  //     </div>
  //   );

  //*5

  //   const [headring, setHeadring] = useState<{ name: string; age: number }>();
  //   const [initColor, setInitColor] = useState('gray')
  //   const [rerender, setRerender] = useState(false)

  //   const data = [
  //     { name: "james", age: 2 , isSelect: false},
  //     { name: "marik", age: 3, isSelect: false },
  //     { name: "lara", age: 1, isSelect: false },
  //   ];

  //   const [childInfo , setChildInfo ] = useState(data)

  //   return (
  //     <div>
  //       <Heading obj={headring} />
  //       <div
  //         style={{
  //           border: "solid black 1px",
  //           margin: 2,
  //           display: "flex",
  //           justifyContent: "center",
  //           gap: 30,
  //         }}
  //       >
  //         {childInfo.map((i, key) => {
  //           return (
  //             <div
  //               key={key}
  //               onClick={() => {
  //                   setHeadring({ name: i.name, age: i.age })
  //                 if(i){
  //                     childInfo.map((i)=> i.isSelect=false)
  //                     console.log(i)
  //                     i.isSelect = true
  //                 }
  //             } }
  //             >
  //               <ChildCompo name={i.name} age={i.age} initColor={initColor} isSelected={i.isSelect}/>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   );

  //*6

  const params = useParams();
  const [user, setUser] = useState<string | undefined>(params.user);

  const navigate = useNavigate();

  useEffect(() => {
    //console.log(user);
    if (user) {
      if (user === fakeDataUser.email) {
        setUser(params.user);
      } else {
        console.log("ok");
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }, [user, navigate, params]);
  //console.log(params.user);

  const fakeData = [
    {
      title: "title1",
      description: "description1",
      containerId: 1,
    },
    {
      title: "title2",
      description: "description2",
      containerId: 1,
    },
    {
      title: "title3",
      description: "description3",
      containerId: 0,
    },
  ];
  const fakeContainerData = [
    {
      title: "project Resources",
    },
    {
      title: "Sujets de la prochaine rénuion",
    },
    {
      title: "A faire",
    },
    {
      title: "xx x  xxx xx",
    },
  ];
  const [carteData, setCarteData] =
    useState<{ title: string; description: string; containerId?: number }[]>(
      fakeData
    );
  const [displayForm, setDisplayForm] = useState(false);
  const [displayBox, setDisplayBox] = useState(false);
  const [storeGetById, setStoreGetById] = useState<number>();



  const addNewTask = (param: {
    title: string;
    description: string;
    containerId: number;
  }) => {
    setCarteData((prev) => [...prev, param]);
    setDisplayForm(false);
  };
  const getById = (param: number) => {
    setDisplayBox(true);
    setStoreGetById(param);
  };
  const updateTask = (param: {
    title: string;
    description: string;
    containerId: number;
  }) => {
    console.log("you ar in the update method");
    const update = carteData.map((i, key) => {
      if (key === storeGetById) {
        return { ...i, title: param.title, description: param.description };
      }
      return i;
    });
    setStoreGetById(undefined);
    setCarteData(update);
    setDisplayForm(false);
  };
  const update = () => {
    setDisplayBox(false);
    setDisplayForm(true);
    console.log(storeGetById);
  };
  const delete_ = () => {
    const update = carteData.filter((i, key) => key !== storeGetById);
    setCarteData(update);
    setStoreGetById(undefined);
    setDisplayBox(false);
  };
  const cancel = () => {
    setStoreGetById(undefined);
    setDisplayBox(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <div style={{ display: "flex" }}>
        {fakeContainerData.map((i, key) => (
          <Container
            containerArray = {fakeContainerData}
            id = {key}
            carteData={carteData}
            getById={getById}
            key={key}
            containerTitle={i.title}
            containerId={key}
            setCarteData ={setCarteData}
          />
        ))}
      </div>
      {displayForm && (
        <Form
          addNewTask={addNewTask}
          updateTask={updateTask}
          id={storeGetById}
          data={carteData}
        />
      )}
      <button onClick={() => setDisplayForm(true)}>Add a new task</button>

      {displayBox && (
        <DialogBox update={update} delete_={delete_} cancel={cancel} />
      )}
    </div>
  );
};
type TCarte = {
  title: string | boolean;
  description: string | boolean;
};
type TForm = {
  addNewTask: (param: {
    title: string;
    description: string;
    containerId: number;
  }) => void;

  updateTask: (param: {
    title: string;
    description: string;
    containerId: number;
  }) => void;

  id: number | undefined;
  data: { title: string; description: string; containerId?: number }[];
};
type TContener = {
  carteData: { title: string; description: string; containerId?: number }[];
  getById: (param: number) => void;
  containerTitle: string;
  containerId: number;
  setCarteData:(update:{ title: string; description: string; containerId?: number | undefined }[]) => void;
  id:number,
  containerArray: {title: string}[]
};
type TCheckboxSTM = {
  getId: (value: number) => void;
  data:
    | { title: string; description: string; containerId?: number }
    | undefined;
};

type TDialogBox = {
  update: () => void;
  delete_: () => void;
  cancel: () => void;
};

const DialogBox = ({ update, delete_, cancel }: TDialogBox) => {
  return (
    <div
      style={{
        border: "solid",
        display: "flex",
        gap: 10,
        justifyContent: "center",
        width: 400,
        margin: "auto",
        paddingTop: 20,
        paddingBottom: 10,
      }}
    >
      <div
        onClick={() => update()}
        style={{
          border: "solid 1px",
          padding: 5,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        Update
      </div>
      <div
        onClick={() => delete_()}
        style={{
          border: "solid 1px",
          padding: 5,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        Delete
      </div>
      <div
        onClick={() => cancel()}
        style={{
          border: "solid 1px",
          padding: 5,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        cancel
      </div>
    </div>
  );
};



const Container = ({
  carteData,
  getById,
  containerTitle,
  containerId,
  setCarteData,
  id,
  containerArray
}: TContener) => {
  const dragStarted = (e: React.DragEvent, IcontainerId: any) => {
    e.dataTransfer.setData("task", IcontainerId);
  };

  const onDrageOvering = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const dragDrop = (e: React.DragEvent, CId?: number | undefined) => {
    const keyTask = Number(e.dataTransfer.getData("task"));
    const update = carteData.map((i, key) => {
      if (key === keyTask) {
        return { ...i, containerId : CId};
      }
      return i;
    });
    setCarteData(update)
  };

  const dragDropTable = (e: React.DragEvent, id: any) => {e.dataTransfer.setData("table", id); console.log(id)}
const onDrageOveringTable = (e: React.DragEvent) => {e.preventDefault();}
const dragStartedTable = (e: React.DragEvent) =>{
  const keytable = Number(e.dataTransfer.getData("table"));
  //containerArray
  //console.log(keytable)
}
  
  return (
    <div
    draggable
    onDragOver={(e) => onDrageOveringTable(e)}
    onDrop={(e) => dragDropTable(e, id)}
    >
      <div
       draggable
       onDragStart={(e) => dragStartedTable(e)}
      style={{
        border: " solid 2px black",
        width: 300,
        backgroundColor: "lightgray",
        paddingLeft: 5,
        paddingRight: 5,
      }}
    >
      <div> {containerTitle}</div>
      <div
        draggable
        onDragOver={(e) => onDrageOvering(e)}
        onDrop={(e) => dragDrop(e, containerId)}
        style={{ border: " solid 2px black", paddingTop: 5, paddingBottom: 5 }}
      >
        {carteData.map((i, key) => (
          <div
            key={key}
            onClick={() => getById(key)}
            draggable
            onDragStart={(e) => dragStarted(e, key)}
           
          >
            <Carte
              title={i.containerId === containerId && i.title}
              description={i.containerId === containerId && i.description}
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};
const Carte = ({ title, description }: TCarte) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: 4,
        marginBottom: 5,
        flexGrow: 1,
      }}
    >
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
};

const Form = ({ addNewTask, updateTask, id, data }: TForm) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [containerId, setContainerId] = useState<number>(1);
  console.log(containerId);
  const actualData = data.find((i, key) => key === id);
  console.log(actualData);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: 500,
        gap: 10,
        position: "absolute",
        left: 0,
        right: 0,
        top: 100,
        margin: "auto",
        backgroundColor: "lightgray",
        padding: 100,
      }}
    >
      <input
        type={"text"}
        onChange={(e) => setTitle(e.target.value)}
        placeholder={actualData && actualData.title}
      ></input>
      <textarea
        rows={5}
        onChange={(e) => setDescription(e.target.value)}
        placeholder={actualData && actualData.description}
      ></textarea>

      <div>
        <CheckboxSTM
          getId={(value) => setContainerId(value)}
          data={actualData}
        />
      </div>
      <button
        onClick={() =>
          id
            ? updateTask({ title, description, containerId })
            : addNewTask({ title, description, containerId })
        }
      >
        {id ? "update" : "Add"}
      </button>
    </div>
  );
};

const CheckboxSTM = ({ getId, data }: TCheckboxSTM) => {
  const [checkboxData, setCheckboxData] = useState([
    { id: 0, checked: false, name: "bolg1" },
    { id: 1, checked: false, name: "bolg1" },
    { id: 2, checked: false, name: "bolg1" },
    { id: 3, checked: false, name: "bolg1" },
  ]);

  console.log(checkboxData);

  const checkboxes = checkboxData.map((i, key) => (
    <input
      key={key}
      type="checkbox"
      checked={i.id === data?.containerId ? true : i.checked}
      onChange={(e) => {
        const reset = checkboxData.map((itemI) => {
          return { ...itemI, checked: false };
        });

        setCheckboxData(reset);

        const isSelected = checkboxData.map((itemI) => {
          if (itemI === i) {
            return { ...itemI, checked: true };
          } else {
            return { ...itemI, checked: false };
          }
        });
        setCheckboxData(isSelected);
        getId(i.id);
      }}
    />
  ));

  return <div>{checkboxes}</div>;
};

// <input type="checkbox" id="horns" checked={i.checked} onClick={(e)=>setContainerId(i.id) } />

//////////////////////////////////////////////////////////////////////////////////
type TPchild1 = {
  name: string;
  age: number;
  initColor: string;
  isSelected: boolean;
};
type TPobj = {
  obj: { name: string; age: number } | undefined;
};
const Heading = ({ obj }: TPobj) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 30,
        border: "solid black 1px",
        paddingTop: 5,
        paddingBottom: 5,
        marginBottom: 5,
      }}
    >
      <div> name: {obj?.name ? obj.name : "empty"}</div>
      <div>age : {obj?.age ? obj.age : "empty"}</div>
    </div>
  );
};

const ChildCompo = ({ name, age, initColor, isSelected }: TPchild1) => {
  const [color] = useState("red");
  return (
    <div
      style={{
        border: "solid black 1px",
        margin: 2,
        padding: 10,
        backgroundColor: isSelected ? color : initColor,
      }}
    >
      <div> name: {name}</div>
      <div>age : {age}</div>
    </div>
  );
};
