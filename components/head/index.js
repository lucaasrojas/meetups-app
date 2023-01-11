import Head from "next/head";

function CustomHead(props){
  const title = `My Meetups ${props.title ? `| ${props.title}` : ""}`
  return(
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={props.description || "My Meetups"}      
        />
      {props.children}
    </Head>
  )
}

export default CustomHead