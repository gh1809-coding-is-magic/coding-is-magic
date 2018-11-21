using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraFollow : MonoBehaviour {

	public Transform target;

	public float smoothSpeed = .3f;
	public Vector3 offset;
	void Start() {
		offset = transform.position - target.position;
	}
	void FixedUpdate ()
	{
		Vector3 desiredPosition = target.position + offset;
		Vector3 smoothedPosition = Vector3.Slerp(transform.position, desiredPosition, smoothSpeed);

		transform.position = smoothedPosition;

		transform.LookAt(target);
	}
}
