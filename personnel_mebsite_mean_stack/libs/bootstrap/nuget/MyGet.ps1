$nuget = $env:NuGet

<<<<<<< HEAD
#parse the version number out of package.json
$bsversion = ((Get-Content $env:SourcesPath\package.json) -join "`n" | ConvertFrom-Json).version

#create packages
& $nuget pack "nuget\bootstrap.nuspec" -Verbosity detailed -NonInteractive -NoPackageAnalysis -BasePath $env:SourcesPath -Version $bsversion
& $nuget pack "nuget\bootstrap.less.nuspec" -Verbosity detailed -NonInteractive -NoPackageAnalysis -BasePath $env:SourcesPath -Version $bsversion
=======
# parse the version number out of package.json
$bsversion = ((Get-Content $env:SourcesPath\package.json) -join "`n" | ConvertFrom-Json).version

# create packages
& $nuget pack "nuget\bootstrap.nuspec" -Verbosity detailed -NonInteractive -NoPackageAnalysis -BasePath $env:SourcesPath -Version $bsversion
& $nuget pack "nuget\bootstrap.less.nuspec" -Verbosity detailed -NonInteractive -NoPackageAnalysis -BasePath $env:SourcesPath -Version $bsversion
>>>>>>> 22e0df6c90c13828c6dfe442d9c197d2e6010988
