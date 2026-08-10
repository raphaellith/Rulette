#!/usr/bin/env bash
set -euo pipefail

# Print usage instructions and exit with an error code.
usage() {
  echo "Usage: $0 <path/to/output-file.gs>" >&2
  echo "Combines all .gs files in this repository into one single .gs file, which can be copy-and-pasted into Google Apps Script's project editor directly." >&2
  exit 1
}

# Must have exactly one argument: The output file path
if [[ $# -ne 1 ]]; then
  usage
fi

output="$1"

# Resolve the absolute path of the directory in which this Bash script lives
# (which is also where the .gs files live)
# so that these .gs files can be found regardless of the current working directory
script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Auto-create the output directory if it does not already exist.
out_dir="$(dirname "$output")"
if [[ "$out_dir" != "." && ! -d "$out_dir" ]]; then
  mkdir -p "$out_dir"
fi

# Collect all .gs files from the script's directory, sorted alphabetically for a deterministic merge order
files=()
while IFS= read -r file; do
  files+=("$file")
done < <(find "$script_dir" -maxdepth 1 -name '*.gs' -print | sort)

# Bail out if there is nothing to merge
if [[ ${#files[@]} -eq 0 ]]; then
  echo "Error: no .gs files found in $script_dir" >&2
  exit 1
fi

# Truncate/create the output file before appending to it
: > "$output"

# Concatenate each file, prefixed by a banner comment and followed by a blank line
for file in "${files[@]}"; do
  name="$(basename "$file")"
  {
    printf '%s\n' "// ===== $name ====="
    cat "$file"
    printf '\n'
  } >> "$output"
done

printf 'Merged %d .gs files into %s\n' "${#files[@]}" "$output"
