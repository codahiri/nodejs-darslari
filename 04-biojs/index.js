const ncbi = reuire("bionode-ncbi");
ncbi.search("sra", "solenopsis").on("data", console.log);
