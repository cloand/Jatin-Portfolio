// const NavDataDisplay = (props, ref) => {
//   const { homeRef, aboutRef, projectRef, experienceRef, contactRef } = ref;
//   const { heading, active, method, change } = props;
//   const { home, about, project, experience, contact } = Strings;

//   const clickChange = useContext(myContext);

//   useEffect(() => {
//     if (heading === home) {
//       method(homeRef.current);
//     } else if (heading === about) {
//       method(aboutRef.current);
//     } else if (heading === project) {
//       method(projectRef.current);
//     } else if (heading === experience) {
//       method(experienceRef.current);
//     } else if (heading === contact) {
//       method(contactRef.current);
//     }
//   }, [clickChange]);

//   return (
//     <NavAnchor onClick={change}>
//       <NavLinkList label={heading} active={active}>
//         {heading}
//       </NavLinkList>
//     </NavAnchor>
//   );
// };

// export default forwardRef(NavDataDisplay);
