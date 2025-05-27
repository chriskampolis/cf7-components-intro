// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
import Layout from "./components/Layout.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import Counter from "./components/Counter.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
import CounterAdvanced from "./components/CounterAdvanced.tsx";


function App() {

  return (
    <>
      <Layout>
      {/*<ClassComponent/>*/}
      {/*<FunctionalComponent/>*/}
      {/*<ArrowFunctionalComponent/>*/}
      {/*<ArrowFunctionalComponentWithProps title="Is an Arrow Component with Props!"/>*/}
      {/*<ArrowFunctionalComponentWithPropsType*/}
      {/*  title="Is an Arrow Component with Props!"*/}
      {/*  description="this is a description"*/}
      {/*/>*/}

        {/*<ClassComponentWithState/>*/}

        {/*<FunctionalComponentWithState/>*/}
        {/*<Counter/>*/}
        {/*<NameChanger/>*/}
        {/*<CounterWithMoreStates/>*/}

        <CounterAdvanced/>
      </Layout>
    </>
  )
}

export default App
