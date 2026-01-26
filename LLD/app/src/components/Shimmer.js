const Shimmer = () => {
  // very imp thing to remember ..
  // since Shimmer UI to be shown for certain elements of certain length .. 
  // create Array ( length ) .. then fill(0) with some value s.. so that map can work on it .. so follow this rule ..
  // Array( len ) .fill ( 0 )--- map elements .. 
  return Array(15)
    .fill(0)
    .map((n, i) => (
      <div key={i} className="p-5 m-5 border border-black rounded-lg">
        <div className="w-64 h-64 bg-gray-200"></div>
      </div>
    ));
};
export default Shimmer;
