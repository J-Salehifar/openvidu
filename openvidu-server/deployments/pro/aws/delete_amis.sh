#!/bin/bash -x
set -eu -o pipefail

# Remove the list of AMIs in each region
export AWS_DEFAULT_REGION=${REGION}

for line in ${AMI_LIST}
do
	REGION=$(echo "${line}" | cut -d":" -f1)
	AMI_ID=$(echo "${line}" | cut -d":" -f2)
      mapfile -t SNAPSHOTS < <(aws ec2 describe-images --image-ids "$AMI_ID" --output text --query 'Images[*].BlockDeviceMappings[*].Ebs.SnapshotId')
      echo "Deregistering $AMI_ID"
	aws ec2 deregister-image --image-id "${AMI_ID}"
      for snapshot in "${SNAPSHOTS[@]}";
      do
            echo "Deleting Snapshot $snapshot from $AMI_ID"
            aws ec2 delete-snapshot --snapshot-id "${snapshot}"
      done
	sleep 1
done