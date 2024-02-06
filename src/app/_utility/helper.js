export default function isAdmin() {
  if (localStorage.getItem("token")) return true;
  else false;
}
