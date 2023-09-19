import { ErrorItem } from "../components/error/error";

export default function Unauthorized() {
  return (
    <ErrorItem
      message="Unauhorized"
      extraInfo="To make this page avaiable set cookie 'next-cookie' equals to 1"
    />
  )
}
